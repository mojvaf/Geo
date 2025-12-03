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
        geo_field = "position"
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
        geo_field = 'boundary'
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
    seasons = serializers.SlugRelatedField(many=True, read_only=True, slug_field="name" )

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
    # human-readable field
    seasons = serializers.SlugRelatedField(
    slug_field="name",
    queryset=Season.objects.all(),
    many=True,
    required=False
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
