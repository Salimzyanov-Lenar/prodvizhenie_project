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