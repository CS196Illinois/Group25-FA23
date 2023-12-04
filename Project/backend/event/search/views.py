from rest_framework import viewsets, filters
from .serializers import EventSerializers
from ..models import Event

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializers
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['event_name', 'description', 'date', 'time', 'location', 'organization', 'category' ]
    ordering_fields = ['event_name', 'description', 'date', 'time', 'location', 'organization', 'category' ]
    
    def get_queryset(self):
        qs = Event.objects.all()
        category = self.request.query_params.get('category')
        # description = self.request.query_params.get('description')
        if category is not None:
            qs = qs.filter(category__icontains=category)
        # if description is not None:
        #    qs = qs.filter(description__icontains=description)
        return qs
