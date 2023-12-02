from .views import EventViewSet
from rest_framework import routers

events_router = routers.DefaultRouter()

events_router.register(r'posts', EventViewSet)
urlpatterns = events_router.urls