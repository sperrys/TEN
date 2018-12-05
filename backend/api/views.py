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

        # Loop through post parameters
        #for key in request.POST:
        #    print(key)
        #    print(request.POST[key])
        #    print("")

        # retrieve email parameter
        emailParam = request.POST.get("seller.email")

        # check if user exists in database
        # if user doesn't exist, create a new one
        # otherwise, update the current one
        try:
            bookUser = user.objects.get(email=emailParam)
            #print("found user with email " + emailParam)            

        except:
            #print("didn't find user with email " + emailParam)
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
        
        # How to serialize all the textbooks in the database
        # Makes sure all the books are stripped of unnecessary
        # fields, and maybe validated too?

        # Ask for all textbook objects from database, with or without filtering
        # textbooks = Textbook.objects.all()
        #textbooks = Textbook.objects.filter(post_id=2)

        #serializedTextbooks = TestSerializer(textbooks, many=True)
        #return Response(serializedTextbooks.data)

        #postParams = request.POST
        #return HttpResponse(postParams)
        #return HttpResponse('success')

        #return render(request, self.template_name)
  

