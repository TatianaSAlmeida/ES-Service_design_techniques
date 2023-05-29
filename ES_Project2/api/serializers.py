from rest_framework import serializers
from .models import *

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class NameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Name
        fields = ('id', 'name',)


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Customize the token payload if needed
        # token['custom_payload'] = user.custom_property

        return token
        
    
class PurchaseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Purchase
        fields = (
            'prescription', 'is_paid', 'purchase_status', 'client_name', 'pharmacist'
        )