from rest_framework_gis.serializers import GeoFeatureModelSerializer
from rest_framework import serializers

from .models import Adventure, Country, Region

class AdventureSerializer(GeoFeatureModelSerializer):
    class Meta: 
        model = Adventure
        geo_field = "location"   
        fields = '__all__'

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ['id','name']      


class RegionSerializer(serializers.ModelSerializer):
    country = CountrySerializer(read_only=True)
    class Meta:
        model = Region          
        fields = ['id','key','country'] 
    