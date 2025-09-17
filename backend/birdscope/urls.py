
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from species.views import AdventureViewSet
from django.contrib import admin


router = DefaultRouter()
router.register(r'adventure', AdventureViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    ## API Endpoints
     path('api/', include(router.urls)),
]
