from rest_framework_gis.serializers import GeoFeatureModelSerializer
from .models import Restaurant

class RestaurantSerializer(GeoFeatureModelSerializer):
    class Meta: 
        model = Restaurant         
        fields = ('name',)         
        geo_field = 'location'