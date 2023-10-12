from django.shortcuts import render, redirect
from .models import Event
from .forms import EventForm


def event_form(request):
    if request.method == 'POST':
        form = EventForm(request.POST)
        if form.is_valid():
            form.save()
            # Make sure 'event_list' matches your URL pattern name
            return redirect('/event/list/')
    else:
        form = EventForm()

    return render(request,
                  'event/event_form.html',
                  {'form': form})


def event_list(request):
    events = Event.objects.all()
    return render(request, 'event/event_list.html',
                  {'events': events})
