from django.db import models

# Create your models here.
class Product(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    category = models.IntegerField()
    description = models.CharField(1000)
    price = models.DecimalField(decimal_places=2,max_digits = 20)
    rating = models.DecimalField(decimal_places=1,max_digits = 2)
    image = models.CharField()
    link = models.CharField()
    likes = models.IntegerField()

    def __str__(self):
        return self.name



class Category(models.Model):
    id = models.IntegerField(primary_key=True)
    category = models.CharField()
    image = models.CharField()
    def __str__(self):
        return self.category
