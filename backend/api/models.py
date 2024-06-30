from django.db import models

# Create your models here.


class InspirationImage(models.Model):
    image = models.ImageField(upload_to='inspiration_images/')
    caption = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.caption or "Inspiration Image"
    

class TeamCard(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    image = models.ImageField(upload_to='team_cards/')

    def __str__(self):
        return self.name or "TeamCard name"


class Audience(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    

class Course(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    video_id = models.CharField(max_length=100)
    image = models.ImageField(upload_to='courses_logo/')
    audience = models.ForeignKey(Audience, on_delete=models.CASCADE, related_name='courses')

    def __str__(self):
        return self.title