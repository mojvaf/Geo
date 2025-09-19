from django.contrib import admin
from species.models import Adventure, Country, Region
from leaflet.admin import LeafletGeoAdmin



@admin.register(Adventure)
class AdventureAdmin(LeafletGeoAdmin):
    list_display = ('name', 'location','description')


@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ('id','name')
    search_fields = ('name',)

@admin.register(Region)
class RegionAdmin(admin.ModelAdmin):
    list_display = ('id','key','country')
    list_filter = ('country',)
    search_fields = ('key','country__name')

