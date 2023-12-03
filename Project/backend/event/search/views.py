from rest_framework import viewsets, filters
from .serializers import EventSerializers
from ..models import Event
from django.utils import timezone

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializers
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['event_name', 'description', 'date', 'time', 'location', 'organizer', 'category' ]
    ordering_fields = ['event_name', 'description', 'date', 'time', 'location', 'organizer', 'category' ]
    
    def get_queryset(self):
        qs = Event.objects.all()
        category = self.request.query_params.get('category')
        date = self.request.query_params.get('date')
        if category is not None:
            qs = qs.filter(category__icontains=category)
        if date is not None:
           qs = qs.filter(date__range=(timezone.now().date(), "9999-12-31"))
        return qs
