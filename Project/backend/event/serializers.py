from rest_framework import serializers
from .models import Event, User

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username", "password")

    def create(self, data):
        user = User.objects.create(
            username=data['username'],
        )

        user.set_password(data['password'])
        user.save()

        return user