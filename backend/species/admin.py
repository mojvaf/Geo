from django.contrib import admin
from species.models import Adventure
from leaflet.admin import LeafletGeoAdmin



@admin.register(Adventure)
class AdventureAdmin(LeafletGeoAdmin):
    list_display = ('name', 'location','description')