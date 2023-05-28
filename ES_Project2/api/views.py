from django.shortcuts import render
from rest_framework import generics, status
from .serializers import *
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from .models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets

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


@api_view(['POST'])
def api_login(request):
    print(request.data)
    serializer = PharmacistSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    email = serializer.validated_data['email']
    password = serializer.validated_data['password']
    print("EMAIL ", email)
    print("PASSWORD ", password)
    user = Pharmacist.objects.get(email=email, password=password)
    if user is not None:
        return Response({'message': 'Login successful', 'id': user.id})
    else:
        return Response({'message': 'Invalid email or password'}, status=401)

