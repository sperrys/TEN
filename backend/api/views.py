from django.shortcuts import render
from django.shortcuts import get_object_or_404


# Create your views here.

from .models import *
from .serializers import *

from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import generics

# Create views here!
class ListBookRaw(APIView):

    def get(self, request, format=None):
        """
        Return a list of all books.
        """
        queryset = Textbook.objects.all()
        serializer = SellSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        """
        How might a post request work?
        """
        pass

