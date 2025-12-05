from django.contrib import admin
from django.utils.html import format_html
from leaflet.admin import LeafletGeoAdmin
from species.models import Adventure, Country, Region, Habitat,Season, Bird
from django import forms
from django.contrib.gis.db import models

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
class RegionAdmin(LeafletGeoAdmin):
    list_display = ("id", "name", "country")
    list_filter = ("country",)
    search_fields = ("name",)

    def has_boundary(self, obj):
        return bool(obj.boundary)
    has_boundary.short_description = "Has Boundary"
    has_boundary.boolean = True



# ---------------- Habitat ----------------
@admin.register(Habitat)
class HabitatAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ['name']
    ordering = ['name']

# ---------------- Season ----------------
@admin.register(Season)
class SeasonAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    search_fields = ("name",)
    ordering = ("name",)

# ---------------- Bird ----------------
@admin.register(Bird)
class BirdAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "display_seasons",
        "display_habitats",
        "display_regions",
        "display_countries",
        "display_image",   # small thumbnail
    )

    formfield_overrides = {
        models.ManyToManyField: {
            'widget': forms.SelectMultiple(attrs={'size': 8})
        },
    }

    readonly_fields = ("image_preview",)

    fieldsets = (
        (None, {"fields": ("name", "description")}),
        ("Relations", {"fields": ("seasons", "habitats", "regions")}),
        ("Image", {"fields": ("image", "image_preview")}),
    )

    # Show preview in change form
    def image_preview(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" width="200" style="object-fit:cover;border-radius:6px;" />',
                obj.image.url
            )
        return "No image uploaded"
    image_preview.short_description = "Preview"

    # Thumbnail in list view
    def display_image(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" width="50" height="50" style="object-fit:cover;border-radius:4px;" />',
                obj.image.url
            )
        return "No Image"

    # These remain your display helpers
    def display_seasons(self, obj):
        return ", ".join(s.name for s in obj.seasons.all())

    def display_habitats(self, obj):
        return ", ".join(h.name for h in obj.habitats.all())

    def display_regions(self, obj):
        return ", ".join(r.name for r in obj.regions.all())

    def display_countries(self, obj):
        countries = {r.country.name for r in obj.regions.all() if r.country}
        return ", ".join(countries) if countries else "None"