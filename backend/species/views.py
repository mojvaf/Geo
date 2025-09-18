from rest_framework import viewsets
from .models import Adventure, Country, StateProvince
from .serializers import AdventureSerializer,CountrySerializer, StateProvinceSerializer

class AdventureViewSet(viewsets.ModelViewSet):
    queryset = Adventure.objects.all()
    serializer_class = AdventureSerializer


class CountryViewSet(viewsets.ModelViewSet):
     queryset = Country.objects.all()
     serializer_class = CountrySerializer

class StateProvinceViewSet(viewsets.ModelViewSet):
     queryset = StateProvince.objects.all()
     serializer_class = StateProvinceSerializer     