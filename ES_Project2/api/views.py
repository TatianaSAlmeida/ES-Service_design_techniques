from django.shortcuts import render
from rest_framework import generics, status
from .serializers import *
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from .models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


class NameView(generics.ListAPIView):
    model = Name
    serializer_class = NameSerializer


@api_view(['POST'])
def api_login(request):
    serializer = LoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    email = serializer.validated_data['email']
    password = serializer.validated_data['password']
    
    user = authenticate(request, username=email, password=password)
    if user is not None:
        login(request, user)
        return Response({'message': 'Login successful'})
    else:
        return Response({'message': 'Invalid email or password'}, status=401)