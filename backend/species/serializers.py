from rest_framework_gis.serializers import GeoFeatureModelSerializer
from .models import Adventure

class AdventureSerializer(GeoFeatureModelSerializer):
    class Meta: 
        model = Adventure
        geo_field = "location"   
        fields = '__all__'