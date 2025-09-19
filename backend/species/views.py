from rest_framework import viewsets
from .models import Adventure, Country, Region
from .serializers import AdventureSerializer,CountrySerializer, RegionSerializer

class AdventureViewSet(viewsets.ModelViewSet):
    queryset = Adventure.objects.all()
    serializer_class = AdventureSerializer


class CountryViewSet(viewsets.ModelViewSet):
     queryset = Country.objects.all()
     serializer_class = CountrySerializer


class RegionViewSet(viewsets.ModelViewSet):
     queryset = Region.objects.all().select_related('country')
     serializer_class = RegionSerializer