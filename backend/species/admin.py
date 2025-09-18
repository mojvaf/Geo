from django.contrib import admin
from species.models import Adventure, Country,StateProvince
from leaflet.admin import LeafletGeoAdmin



@admin.register(Adventure)
class AdventureAdmin(LeafletGeoAdmin):
    list_display = ('name', 'location','description')


@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ('id','name')
    search_fields = ('name',)


@admin.register(StateProvince)
class StateProvince(admin.ModelAdmin):
     list_display = ('id', 'name', 'country')
     list_filter = ('country',)
     search_fields = ('name','country__name')
