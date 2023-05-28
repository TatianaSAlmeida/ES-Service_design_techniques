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