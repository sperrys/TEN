from django.shortcuts import render
from rest_framework import generics

from .models import *

from .serializers import *


# Create views here!
class ListBookRaw(generics.ListCreateAPIView):
    queryset = Textbook.objects.all()
    serializer_class = SellSerializer


