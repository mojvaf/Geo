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
class RegionSerializer(GeoFeatureModelSerializer):
    class Meta:
        model = Region
        geo_field = 'Boundary'
        fields = ['id', 'name', 'country','boundary']


# ------------------------
# Habitat Serializer
# ------------------------
class HabitatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habitat
        fields = ['id', 'name']


# ------------------------
# Bird Read Serializer (Nested)
# ------------------------
class BirdSerializer(serializers.ModelSerializer):
    regions = RegionSerializer(many=True, read_only=True)
    habitats = HabitatSerializer(many=True, read_only=True)
    seasons = serializers.ListField(child=serializers.CharField(), read_only=True)

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
    # seasons is a MultiSelectField,
    seasons = serializers.ListField(
        child=serializers.ChoiceField(choices=Season.choices),
        required=False,
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
