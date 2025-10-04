from rest_framework_gis.serializers import GeoFeatureModelSerializer
from rest_framework import serializers
from .models import Adventure, Country, Region,Habitat,Season,Bird
from rest_framework_gis.serializers import GeoFeatureModelSerializer
from rest_framework import serializers
from .models import Adventure, Country, Region, Habitat, Season, Bird


# ------------------------
# Adventure Serializer (GeoFeature)
# ------------------------
class AdventureSerializer(GeoFeatureModelSerializer):
    class Meta:
        model = Adventure
        geo_field = "location"
        fields = '__all__'


# ------------------------
# Country Serializer
# ------------------------
class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ['id', 'name']


# ------------------------
# Region Serializer
# ------------------------
class RegionSerializer(serializers.ModelSerializer):
    country = CountrySerializer(read_only=True)

    class Meta:
        model = Region
        fields = ['id', 'key', 'country']


# ------------------------
# Habitat Serializer
# ------------------------
class HabitatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habitat
        fields = ['id', 'name']


# ------------------------
# Season Serializer
# ------------------------
class SeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Season
        fields = ['id', 'name']


# ------------------------
# Bird Read Serializer (Nested)
# ------------------------
class BirdSerializer(serializers.ModelSerializer):
    seasons = SeasonSerializer(many=True, read_only=True)
    regions = RegionSerializer(many=True, read_only=True)
    habitats = HabitatSerializer(many=True, read_only=True)

    class Meta:
        model = Bird
        fields = [
            "id",
            "name",
            "seasons",
            "habitats",
            "regions",
            "description",
            "image"
        ]


# ------------------------
# Bird Write Serializer (Primary Key for Relationships)
# ------------------------
class BirdWriteSerializer(serializers.ModelSerializer):
    seasons = serializers.PrimaryKeyRelatedField(
        queryset=Season.objects.all(), many=True, required=False
    )
    habitats = serializers.PrimaryKeyRelatedField(
        queryset=Habitat.objects.all(), many=True, required=False
    )
    regions = serializers.PrimaryKeyRelatedField(
        queryset=Region.objects.all(), many=True, required=False
    )

    class Meta:
        model = Bird
        fields = [
            "id",
            "name",
            "seasons",
            "habitats",
            "regions",
            "description",
            "image"
        ]
