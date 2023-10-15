from django.shortcuts import render
from rest_framework import generics, status
from .serializers import EventSerializer
from event.models import Events

# Create your views here.
class EventListView(generics.ListAPIView):
    model = Events
    serializer_class = EventSerializer

# def index(request):

#     context = {

#     }
#     return render(request, "main/base.html", context)
