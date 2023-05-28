
from django.urls import path
from .views import *

urlpatterns = [
    path('', index),
    path('face-recognition/', face_recognition),
    path('face_recognition_verifier/', face_recognition_verifier),
    path('confirm-payment/', confirm_payment)
]