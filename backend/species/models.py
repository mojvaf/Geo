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
    
class Region(models.Model):
    key = models.CharField(max_length=50, unique=True,blank=True,null=True)
    country = models.ForeignKey(Country, on_delete=models.SET_NULL,blank=True,null=True)

    def __str__(self):
           return str(self.country) if self.country else f"Region {self.key} or Unknown"
    

class Habitat(models.Model):
     name = models.CharField(max_length=70, unique=True, blank=True,null=True)

     def __str__(self):
          return self.name or "Unknown Habitat"
     
class Season(models.Model):
      name = models.CharField(max_length=60, unique=True, null=True, blank=True )

      def __str__(self):
           return self.name or "Unknown Season"
      
class Bird(models.Model):
     name = models.CharField(max_length=255, blank=True, null=True)  
     seasons = models.ManyToManyField(Season, related_name='birds', blank=True)
     habitats = models.ManyToManyField(Habitat, related_name='birds', blank=True)
     regions = models.ManyToManyField(Region, related_name='birds', blank=True)
     description = models.TextField(blank=True, null=True)
     image = models.ImageField(upload_to="birds/", blank=True, null=True)


     def __str__(self):
        return self.name or "Unnamed Bird"