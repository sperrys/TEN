from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import Response
from api.serializers import SellSerializer 
from .models import *
from django.http import HttpResponse


from .serializers import *

# Create views here!
class ListBookRaw(generics.ListCreateAPIView):
    queryset = Textbook.objects.all()
    serializer_class = SellSerializer

    def post(self, request, *args, **kwargs):

        # Retrieve email parameter
        emailParam = request.POST.get("seller.email")

        # Check if user exists in database using their
        # email as a unique identifier
        # -if user doesn't exist, create a new one
        # -otherwise, update the current one
        try:
            bookUser = user.objects.get(email=emailParam)            

        except:
            bookUser = user(name="Somename",
                            email=emailParam,
                            phone=12345,
                            venmo=request.POST.get("seller.venmo"))

            bookUser.save()

        # Make a new textbook object
        newTextbook = Textbook(subject=request.POST.get("subject"),
                               class_id=1111111,
                               price=111111,
                               donate=True,
                               present=False,
                               isbn=23456,
                               title=request.POST.get("title"),
                               edition=request.POST.get("edition"),
                               seller=bookUser) 

        # Save the textbook object into the database
        newTextbook.save()
    
        return HttpResponse('success')

class UserGet(generics.RetrieveAPIView):
    queryset = user.objects.all()
    lookup_field = "email"
    serializer_class = userSerializer

    # a GET request at localhost:8000/api/user/noemail will get the user with email "noemail"




