from django.contrib.gis.db import models

class Bird(models.Model):
    name = models.CharField(max_length=100)
    scientific_name = models.CharField(max_length=150, blank=True, null=True)

    def __str__(self):
        return self.name
    
class BirdArea(models.Model):
    bird = models.ForeignKey(Bird, on_delete=models.CASCADE, related_name='areas')
    area = models.PolygonField(srid=4326)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return f'{self.bird.name} Area'