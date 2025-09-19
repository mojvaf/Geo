from rest_framework import viewsets
from .models import Adventure, Country
from .serializers import AdventureSerializer,CountrySerializer

class AdventureViewSet(viewsets.ModelViewSet):
    queryset = Adventure.objects.all()
    serializer_class = AdventureSerializer


class CountryViewSet(viewsets.ModelViewSet):
     queryset = Country.objects.all()
     serializer_class = CountrySerializer

