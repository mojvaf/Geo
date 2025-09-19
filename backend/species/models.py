from django.db import models
from django.contrib.gis.db import models


class Adventure(models.Model):
    name = models.CharField(max_length=100)
    location = models.PointField(srid=4326)
    description = models.CharField(max_length=1000)

    def __str__(self):
        return self.name
    

class Country(models.Model):
    name = models.CharField(max_length=100, unique=True,blank=True,null=True)

    def __str__(self):
        return self.name
    

    


    