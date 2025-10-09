from django.contrib.gis.db import models
from multiselectfield import MultiSelectField


class Adventure(models.Model):
    name = models.CharField(max_length=255,db_index=True)
    location = models.PointField(srid=4326,spatial_index=True)
    description = models.CharField(max_length=1000)

    def __str__(self):
        return self.name
    

class Country(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name
    

class Region(models.Model):
    name = models.CharField(max_length=50, unique=True)
    country = models.ForeignKey(Country, on_delete=models.SET_NULL,blank=True,null=True)
    boundary = models.PolygonField(null=True, blank=True)

    def __str__(self):
           return f"{self.name} ({self.country})" if self.country else self.name
    

class Habitat(models.Model):
     name = models.CharField(max_length=70, unique=True, blank=True, null=True)

     def __str__(self):
          return self.name or "Unknown Habitat"
     
class Season(models.TextChoices):
    SUMMER = "Summer", "Summer"
    YEAR_AROUND = "Year_round" , "Year_round"
    WINTER = "Winter","Winter"
    
      
class Bird(models.Model):
     name = models.CharField(max_length=255, blank=True, null=True)  
     seasons = MultiSelectField(choices=Season.choices, blank=True, null=True)
     habitats = models.ManyToManyField(Habitat, related_name='birds', blank=True)
     regions = models.ManyToManyField(Region, related_name='birds', blank=True)
     description = models.CharField(max_length=70,unique=True,blank=True, null=True)
     image = models.ImageField(upload_to="birds/", blank=True, null=True)


     def __str__(self):
        return self.name or "Unnamed Bird"