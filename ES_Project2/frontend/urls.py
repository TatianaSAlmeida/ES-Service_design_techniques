
from django.urls import path
from .views import index, face_recognition

urlpatterns = [
    path('', index),
    path('face-recognition', face_recognition)
]