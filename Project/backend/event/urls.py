from django.urls import path
from . import views
from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
<<<<<<< HEAD
    path('', views.events, name='events'),
    path('events/<int:pk>/', views.event_detail, name='event_detail'),
]
=======
    path('', views.getEvents),
    path('users/', views.createUser),
    path('routes/', views.getRoutes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
>>>>>>> d82773e6416954b2d4f26b7af1800a1f26f6a02e
