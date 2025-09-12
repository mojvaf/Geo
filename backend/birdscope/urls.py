
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from species.views import RestaurantViewSet
from django.contrib import admin


router = DefaultRouter()
router.register(r'restaurants', RestaurantViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    ## API Endpoints
     path('api/', include(router.urls)),
]
