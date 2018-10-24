from rest_framework import routers
from django.urls import path

from .models import *
from .views import *

urlpatterns = [
    path("browse/", ListBookRaw.as_view(), name="browse-list"),
]
