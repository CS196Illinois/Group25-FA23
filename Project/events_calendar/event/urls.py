from django.urls import path
from . import views

app_name = 'event'

urlpatterns = [
    path('form/', views.event_form, name='event_form'),
    path('list/', views.event_list, name='event_list'),

]
