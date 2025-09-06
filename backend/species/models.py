from django.db import models

class Bird(models.Model):
     name = models.CharField(max_length=100)
     scientific_name = models.CharField(max_length=150, blank=True, null=True)


     def __str__(self):
        return self.name

class Area(models.Model):
    coordinates = models.JSONField(blank= True,null=True)
    name = models.CharField(max_length=150, blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return f'{self.name} Area'
