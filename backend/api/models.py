from django.db import models

# Create your models here.


class InspirationImage(models.Model):
    image = models.ImageField(upload_to='inspiration_images/')
    caption = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.caption or "Inspiration Image"