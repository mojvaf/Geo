from rest_framework_gis.serializers import GeoFeatureModelSerializer
from rest_framework import serializers

from .models import Adventure, Country, StateProvince

class AdventureSerializer(GeoFeatureModelSerializer):
    class Meta: 
        model = Adventure
        geo_field = "location"   
        fields = '__all__'

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ['id','name']        

    