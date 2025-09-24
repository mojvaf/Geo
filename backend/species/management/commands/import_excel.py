import os
import pandas as pd
from django.core.management.base import BaseCommand
from django.conf import settings
from species.models import Bird, Season, Habitat, Region, Country,Description


class Command(BaseCommand):
    help = "Import Birds from Excel sheet"

    def add_arguments(self, parser):
        parser.add_argument(
            "file_path", type=str, help="Path to the Excel file containing bird data"
        )
        parser.add_argument(
            "--image-dir",
            type=str,
            default=None,
            help="Optional folder path containing images",
        )

    def handle(self, *args, **kwargs):
        file_path = kwargs["file_path"]
        image_dir = kwargs.get("image_dir")

        if not os.path.exists(file_path):
            self.stdout.write(self.style.ERROR(f"File not found: {file_path}"))
            return

        # Step 1: Migrate existing Bird descriptions to Description objects
        birds = Bird.objects.all()
        for bird in birds:
            if bird.description and not isinstance(bird.description, Description):
                desc = Description.objects.create(name=bird.description)
                bird.description = desc
                bird.save()
        self.stdout.write(self.style.SUCCESS("All existing bird descriptions migrated successfully!"))
   

        # Read Excel file
        df = pd.read_excel(file_path)

        for _, row in df.iterrows():
            name = row.get("name")
            if pd.isna(name):
                self.stdout.write(self.style.WARNING("Skipped row with no name"))
                continue
            name = name.strip()

            description = row.get("description") or ""

            # Create or update Bird
            desc_obj = Description.objects.create(name=description)
            bird, created = Bird.objects.get_or_create(
                name=name,
                defaults={"description": desc_obj}
            )
            if not created:
                if isinstance(description, str):
                   desc_obj = Description.objects.create(name=description)
                bird.description = desc_obj

            # Season (single)
            season_name = row.get("season")
            season_objs = []
            if pd.notna(season_name):
                season_obj, _ = Season.objects.get_or_create(name=season_name.strip())
                season_objs.append(season_obj)
            bird.seasons.set(season_objs)

            # Habitats (comma-separated)
            habitat_objs = []
            if pd.notna(row.get("habitat")):
                for h in str(row["habitat"]).split(","):
                    h = h.strip()
                    if h:
                        habitat_obj, _ = Habitat.objects.get_or_create(name=h)
                        habitat_objs.append(habitat_obj)
            bird.habitats.set(habitat_objs)

            # Region + Country
            region_key = row.get("region_key")
            country_name = row.get("country")
            region_objs = []
            if pd.notna(region_key) and pd.notna(country_name):
                country_obj, _ = Country.objects.get_or_create(name=country_name.strip())
                region_obj, _ = Region.objects.get_or_create(
                    key=region_key.strip(),
                    country=country_obj
                )
                region_objs.append(region_obj)
            bird.regions.set(region_objs)

            # Optional image
            if image_dir and pd.notna(row.get("image")):
                image_filename = str(row["image"]).strip()
                image_path = os.path.join(image_dir, image_filename)
                if os.path.exists(image_path):
                    with open(image_path, "rb") as f:
                        bird.image.save(image_filename, f, save=False)

            bird.save()
            action = "Created" if created else "Updated"
            self.stdout.write(self.style.SUCCESS(f"{action} Bird: {bird.name}"))

        self.stdout.write(self.style.SUCCESS("Excel import completed successfully!"))
