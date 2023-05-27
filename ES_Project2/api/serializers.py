from rest_framework import serializers
from .models import *


class NameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Name
        fields = ('id', 'name',)


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()