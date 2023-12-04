from rest_framework import serializers
from .models import Event, User

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event

        fields = '__all__'

    def create(self, data):
        organizer_id = data['organizer'].id

        user = User.objects.get(id=organizer_id)

        event = Event.objects.create(
            event_name=data['event_name'],
            description=data['description'],
            date=data['date'],
            time=data['time'],
            location=data['location'],
            organization=data['organization'],
            category=data['category'],
            organizer=user,
        )

        event.save()
        return event




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