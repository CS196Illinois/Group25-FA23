from django.shortcuts import render
from event.models import Event

# Create your views here.


def index(request):

    context = {

    }
    return render(request, "main/base.html", context)
