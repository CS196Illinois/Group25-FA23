from django.urls import path, include
from .views import EventListView

app_name = 'main'

urlpatterns = [
    path('event', EventListView.as_View()),
    path('', include('frontend.urls'))
]