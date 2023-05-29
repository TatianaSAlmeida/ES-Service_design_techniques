
from django.urls import path
from .views import index, face_recognition, confirm_payment

urlpatterns = [
    path('', index),
    path('face-recognition', face_recognition),
    path('confirm-payment', confirm_payment)
]