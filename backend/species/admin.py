from django.contrib import admin
from species.models import Bird , Area,Restaurant
from leaflet.admin import LeafletGeoAdmin


admin.site.register(Bird)
admin.site.register(Area)
@admin.register(Restaurant)
class RestaurantAdmin(LeafletGeoAdmin):
    list_display = ('name', 'location')