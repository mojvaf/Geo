from rest_framework_gis.serializers import GeoFeatureModelSerializer
from .models import Restaurant

class RestaurantSerializer(GeoFeatureModelSerializer):
    class Meta: 
        model = Restaurant
        geo_field = "location"   
        fields = ("id", "name")