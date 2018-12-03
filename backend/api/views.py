from django.shortcuts import render
from rest_framework import generics
from api.serializers import BrowseAllSerializer
from api.serializers import PreSellSerializer
from .models import *

from .serializers import *

# Create views here!
class ListBookRaw(generics.ListCreateAPIView):
    queryset = Textbook.objects.all()
    serializer_class = PreSellSerializer

#class 
# def adduser(request, email):
#     if request.method == "POST":
#         store = Store.objects.get(email=email)
#         saved_username = request.POST.get("username", "")
#         saved_feedback = request.POST.get("feedback", "")
#         feedback = Feedback(username=saved_username, comment=saved_feedback, date=timezone.now())
#         feedback.save()
#     return HttpResponseRedirect(reverse("view", args=(store.id,)))