from django.shortcuts import render
from rest_framework import generics, status
from .serializers import *
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from .models import *
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
    print(request.data)
    serializer = LoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    email = serializer.validated_data['email']
    password = serializer.validated_data['password']
    print("EMAIL ", email)
    print("PASSWORD ", password)
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
    print("1")
    print(request.data)
    serializer = PurchaseSerializer(data=request.data)
    print("2")

    serializer.is_valid(raise_exception=True)
    print("3")

    prescription = serializer.validated_data['prescription']
    is_paid = serializer.validated_data['is_paid']
    purchase_status = serializer.validated_data['purchase_status']
    client_name = serializer.validated_data['client_name']
    pharmacist_id = serializer.validated_data['pharmacist_id']

    print("PRESCRIPTION ", prescription)
    print("IS_PAID ", is_paid)
    print("PURCHASE_STATUS ", purchase_status)
    print("client_name ", client_name)
    print("pharmacist_id ", pharmacist_id)

    purchase_obj = Purchase.objects.create(prescription=prescription, is_paid = is_paid, purchase_status = purchase_status, client_name = client_name, pharmacist_id = pharmacist_id)
