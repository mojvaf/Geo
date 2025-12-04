from django.contrib.gis.db import models
from datetime import date
from django.contrib.gis.geos import Point



class Adventure(models.Model):
    cityName = models.CharField(max_length=255,db_index=True)
    country = models.CharField(max_length=50, default="Unknown")
    date = models.DateField(default=date.today)
    position = models.PointField(srid=4326,spatial_index=True, default=Point(0, 0))
    notes = models.CharField(max_length=1000, blank=True,null=True)

    def __str__(self):
        return f"{self.cityName}, {self.country}"
    

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
     
class Season(models.Model):
   SUMMER = "Summer"
   WINTER = "Winter"
   YEAR_AROUND = "Year Around"

   SEASON_CHOICES = [
       (SUMMER, "Summer"),
       (WINTER, "Winter"),
       (YEAR_AROUND, "Year Around"),
   ]

   name = models.CharField(max_length= 50, choices=SEASON_CHOICES,unique=True)

   class Meta:
       ordering = ["name"]

   def __str__(self):
      return self.name   
      
class Bird(models.Model):
     name = models.CharField(max_length=255, blank=True, null=True)  
     seasons = models.ManyToManyField(Season, related_name="birds", blank=True)
     habitats = models.CharField(max_length=255, blank=True, null=True)
     regions = models.ManyToManyField(Region, related_name='birds', blank=True)
     description = models.CharField(max_length=70,unique=True,blank=True, null=True)
     image = models.ImageField(upload_to="birds/", blank=True, null=True)


     def __str__(self):
        return self.name or "Unnamed Bird"