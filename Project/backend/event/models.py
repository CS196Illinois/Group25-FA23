from django.db import models
# from django.contrib.auth.models import User

# Create your models here.
CATEGORY_CHOICES = (
    ('Politics', 'Politics'),
    ('Technology', 'Technology'),
    ('Science', 'Science'),
    ('Socials', 'Socials'),
    ('Entertainment', 'Entertainment'),
    ('Others', 'Others'),
)

class Event(models.Model):
    event_name = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    time = models.TimeField()
    location = models.CharField(max_length=300)
    organizer = models.CharField(max_length=300)
    category = models.CharField(max_length=300, choices=CATEGORY_CHOICES)

    class Meta:
        ordering = ['-date', '-time']

    def __str__(self):
        return self.event_name