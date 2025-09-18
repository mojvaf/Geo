
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from species.views import AdventureViewSet, CountryViewSet, StateProvinceViewSet
from django.contrib import admin


router = DefaultRouter()
router.register(r'adventure', AdventureViewSet)
router.register('countries', CountryViewSet)
router.register('states', StateProvinceViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    ## API Endpoints
     path('api/', include(router.urls)),
]
