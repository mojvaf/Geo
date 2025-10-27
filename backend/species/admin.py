from django.contrib import admin
from django.utils.html import format_html
from leaflet.admin import LeafletGeoAdmin
from species.models import Adventure, Country, Region, Habitat, Bird


# ---------------- Adventure ----------------
@admin.register(Adventure)
class AdventureAdmin(LeafletGeoAdmin):
    list_display = ('cityName', 'position', 'notes')
    search_fields = ['cityName', 'notes']
    ordering = ['cityName']


# ---------------- Country ----------------
@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ['name']
    ordering = ['name']


# ---------------- Region ----------------
@admin.register(Region)
class RegionAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'country')
    list_filter = ('country',)
    search_fields = ['name', 'country__name']
    ordering = ['name']


# ---------------- Habitat ----------------
@admin.register(Habitat)
class HabitatAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ['name']
    ordering = ['name']

# ---------------- Bird ----------------
@admin.register(Bird)
class BirdAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'display_seasons',
        'display_habitats',
        'display_regions',
        'description',
        'display_image',
    )
    search_fields = ['name']
    filter_horizontal = ['habitats', 'regions']
    ordering = ['name']

    # ---------------- Methods ----------------
    def display_image(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" width="50" height="50" style="object-fit: cover;" />',
                obj.image.url
            )
        return "No Image"
    display_image.short_description = "Image"

    def display_habitats(self, obj):
        return ", ".join([h.name for h in obj.habitats.all()])
    display_habitats.short_description = "Habitats"

    def display_regions(self, obj):
        return ", ".join([str(r) for r in obj.regions.all()])
    display_regions.short_description = "Regions"

    def display_seasons(self, obj):
        return ", ".join(obj.seasons or [])
    display_seasons.short_description = "Seasons"
