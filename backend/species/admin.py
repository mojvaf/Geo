from django.contrib import admin
from species.models import Adventure, Country, Region, Habitat, Season, Bird, Description
from leaflet.admin import LeafletGeoAdmin
from django.utils.html import format_html


# ---------------- Adventure ----------------
@admin.register(Adventure)
class AdventureAdmin(LeafletGeoAdmin):
    list_display = ('name', 'location', 'description')
    search_fields = ('name', 'description')
    ordering = ('name',)


# ---------------- Country ----------------
@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)
    ordering = ('name',)


# ---------------- Region ----------------
@admin.register(Region)
class RegionAdmin(admin.ModelAdmin):
    list_display = ('id', 'key', 'country')
    list_filter = ('country',)
    search_fields = ('key', 'country__name')
    ordering = ('country__name', 'key')


# ---------------- Habitat ----------------
@admin.register(Habitat)
class HabitatAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)


# ---------------- Season ----------------
@admin.register(Season)
class SeasonAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)
    ordering = ('name',)


# ---------------- Description ----------------
@admin.register(Description)
class DescriptionAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)


# ---------------- Bird ----------------
@admin.register(Bird)
class BirdAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "description",  # Shows the Description object
        "display_image",
        "display_seasons",
        "display_habitats",
        "display_regions"
    )
    search_fields = ("name", "description__name")
    filter_horizontal = ("seasons", "habitats", "regions")
    ordering = ("name",)

    # ---------------- Methods ----------------
    def display_image(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" width="50" height="50" style="object-fit: cover;" />',
                obj.image.url
            )
        return "No Image"
    display_image.short_description = "Image"

    def display_seasons(self, obj):
        return ", ".join([s.name for s in obj.seasons.all()])
    display_seasons.short_description = "Seasons"

    def display_habitats(self, obj):
        return ", ".join([h.name for h in obj.habitats.all()])
    display_habitats.short_description = "Habitats"

    def display_regions(self, obj):
        return ", ".join([str(r) for r in obj.regions.all()])
    display_regions.short_description = "Regions"
