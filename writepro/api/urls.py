from django.urls import path
from .views import apistatus

urlpatterns = [
    path('Status', apistatus)
]