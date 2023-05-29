from django.shortcuts import render
from rest_framework import generics, status
from .serializers import *
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from .models import *
from django.core import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework_simplejwt.tokens import RefreshToken


# Create your views here.
class NameView(viewsets.ModelViewSet):
    queryset = Name.objects.all()
    serializer_class = NameSerializer

class PharmacistViewSet(viewsets.ModelViewSet):
   queryset = Pharmacist.objects.all()
   serializer_class = LoginSerializer


class PurchaseViewSet(viewsets.ModelViewSet):
   queryset = Purchase.objects.all()
   serializer_class = PurchaseSerializer


@api_view(['POST'])
def api_login(request):
    
    serializer = LoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    email = serializer.validated_data['email']
    password = serializer.validated_data['password']
    
    user = Pharmacist.objects.get(email=email, password=password)
    if user is not None:
        refresh = RefreshToken.for_user(user)
        return Response({
            'message': 'Login successful',
            'access_token': str(refresh.access_token),
            'refresh_token': str(refresh),
            'id': user.id,
            'valid': '1'
        })
    else:
        return Response({'message': 'Invalid email or password', 'valid': '0'}, status=401)




@api_view(['POST'])
def api_purchase(request):

    #serializer = PurchaseSerializer(data=request.data)
    
    prescription = request.data['prescription']
    print(request.data)
    is_paid = request.data['is_paid']
    purchase_status = request.data['purchase_status']
    client_name = request.data['client_name']
    pharmacist_id = request.data['pharmacist_id']

    purchase_obj = Purchase.objects.create(prescription=prescription, is_paid = is_paid, purchase_status = purchase_status, client_name = client_name, pharmacist_id = pharmacist_id)


    return Response({'message': 'Yo', 'id': purchase_obj.id})


@api_view(['POST'])
def api_get_purchase(request):
    purchases = Purchase.objects.all()
    serialized_purchases = serializers.serialize('json', purchases)
    return Response(serialized_purchases, content_type='application/json')
