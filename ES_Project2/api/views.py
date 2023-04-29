

from django.shortcuts import render
from rest_framework import generics, status
from .serializers import NameSerializer

from .models import Name
# Create your views here.


class NameView(generics.ListAPIView):
    model = Name
    serializer_class = NameSerializer