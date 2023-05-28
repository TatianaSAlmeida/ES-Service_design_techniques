

from django.shortcuts import render
from rest_framework import generics, status
from .serializers import NameSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets

from .models import Name
# Create your views here.


class NameView(generics.ListAPIView):
    model = Name
    serializer_class = NameSerializer



# @api_view(['POST'])
# def face_recognition(request):
#     print("asdasdasdasdasd")
#     return Response({'message': 'Login successful'})

# @api_view(['GET'])
# def face_recognition(request, *args, **kwargs):
#     print("qweqweqweqweqwe")
#     return render(request, 'frontend/index.html')