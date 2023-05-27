from django.db import models

class Name(models.Model):
    name = models.CharField(max_length=70)
    
    def __str__(self):
        return self.name

class Pharmacist(models.Model):
    email = models.CharField()
    password = models.CharField()



class Purchase(models.Model):
    PURCHASE_TYPES = (('WP', 'Waiting Payment'), ('WR', 'Waiting for Robot'), ('C', 'Completed'))

    prescription = models.CharField()
    is_paid = models.BooleanField()
    purchase_status = models.CharField(choices=PURCHASE_TYPES, default='Waiting Payment',max_length=40)
    client_name = models.CharField()
    pharmacist = models.ForeignKey(Pharmacist, default=1, verbose_name="Pharmacist", on_delete=models.CASCADE)