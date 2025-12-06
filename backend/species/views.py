from rest_framework import viewsets
from .models import Adventure, Country, Region, Habitat, Bird
from .serializers import AdventureSerializer,CountrySerializer, RegionSerializer,HabitatSerializer,BirdSerializer,BirdWriteSerializer
from rest_framework import filters

class AdventureViewSet(viewsets.ModelViewSet):
    queryset = Adventure.objects.all()
    serializer_class = AdventureSerializer


class CountryViewSet(viewsets.ModelViewSet):
     queryset = Country.objects.all()
     serializer_class = CountrySerializer


class RegionViewSet(viewsets.ModelViewSet):
     queryset = Region.objects.all().select_related('country').order_by('name')
     serializer_class = RegionSerializer


class HabitatViewSet(viewsets.ModelViewSet):
     queryset = Habitat.objects.all()
     serializer_class  = HabitatSerializer



class BirdViewSet(viewsets.ModelViewSet):
      queryset = Bird.objects.all().prefetch_related("seasons",  "regions")
      serializer_class  = BirdSerializer 
      filter_backends = [filters.OrderingFilter, filters.SearchFilter]
      ordering_fields = ['name']
      search_fields = ['name', 'description']
      
      def get_serializer_class(self):
        # Use the "write" serializer for create/update, and the "read" serializer otherwise
        if self.action in ["create", "update", "partial_update"]:
            return BirdWriteSerializer
        return BirdSerializer