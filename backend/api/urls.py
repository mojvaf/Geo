from django.urls import path
from . import views

urlpatternt = [
    path('birds', views.birdsView)
]