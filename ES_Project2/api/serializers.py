from rest_framework import serializers
from .models import Name, Pharmacist, Purchase


class NameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Name
        fields = ('id', 'name')

class PharmacistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pharmacist
        fields = (
            'email', 'password'
        )

class PurchaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Purchase
        fields = (
            'prescription', 'is_paid', 'purchase_status', 'client_name', 'pharmacist'
        )
