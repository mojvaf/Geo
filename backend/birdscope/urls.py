
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from species.views import AdventureViewSet, CountryViewSet, RegionViewSet
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static



router = DefaultRouter()
router.register(r'adventures', AdventureViewSet)
router.register('countries', CountryViewSet)
router.register('regions', RegionViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    ## API Endpoints
     path('api/', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
