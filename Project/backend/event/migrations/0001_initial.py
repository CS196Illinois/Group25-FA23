# Generated by Django 4.2.7 on 2023-11-20 00:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_name', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('date', models.DateField()),
                ('time', models.DurationField()),
                ('location', models.CharField(max_length=300)),
                ('organizer', models.CharField(max_length=300)),
                ('category', models.CharField(choices=[('politics', 'Politics'), ('technology', 'Technology'), ('science', 'Science'), ('others', 'Others')], max_length=300)),
            ],
            options={
                'ordering': ['-date', '-time'],
            },
        ),
    ]
