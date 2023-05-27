from django.shortcuts import render
from rest_framework import generics, status
from rest_framework import viewsets

from .serializers import NameSerializer, PharmacistSerializer, PurchaseSerializer
from .models import Name, Pharmacist, Purchase

# Create your views here.
class NameView(viewsets.ModelViewSet):
    queryset = Name.objects.all()
    serializer_class = NameSerializer

class PharmacistViewSet(viewsets.ModelViewSet):
   queryset = Pharmacist.objects.all()
   serializer_class = PharmacistSerializer

class PurchaseViewSet(viewsets.ModelViewSet):
   queryset = Purchase.objects.all()
   serializer_class = PurchaseSerializer