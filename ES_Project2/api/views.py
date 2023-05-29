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


class NameView(generics.ListAPIView):
    model = Name
    serializer_class = NameSerializer


class PharmacistViewSet(viewsets.ModelViewSet):
   queryset = Pharmacist.objects.all()
   serializer_class = LoginSerializer


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


def lambda_handler(event, context):
    # Retrieve the list of completed purchases from the database
    completed_purchases = get_completed_purchases()
    
    for purchase_id in completed_purchases:
        # Retrieve the purchase details from the database
        purchase_details = get_purchase_details(purchase_id)
        
        prescription = purchase_details['prescription']
        
        # Simulate gathering drugs for 15 seconds
       
        
        # Simulate giving the prescription to the client for 15 seconds
        give_prescription(prescription)
        
        # Update the database with the gathered drugs and prescription delivery status
        update_database(purchase_id, prescription)
        
    return {
        'statusCode': 200,
        'message': 'Completed purchases processed successfully.'
    }