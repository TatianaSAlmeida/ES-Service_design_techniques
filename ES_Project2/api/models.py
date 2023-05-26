from django.db import models


class Name(models.Model):
    
    name = models.CharField(max_length=70)
    
    def __str__(self):
        return self.name

class Pharmacist(models.Model):
    email = models.CharField()
    password = models.CharField()

class Purchase(models.Model):
    prescription = models.CharField()
    is_paid = models.BooleanField()
    purchase_status = models.CharField()
    client_name = models.CharField()
    tutorial_category = models.ForeignKey(Pharmacist, default=1, verbose_name="Pharmacist", on_delete=models.CASCADE)