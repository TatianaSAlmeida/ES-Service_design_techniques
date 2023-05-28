
from django.urls import path
from .views import NameView
from .views import *

urlpatterns = [
    path('name', NameView.as_view()), 
    # path('face-recognition', face_recognition, name='face-recognition'),
]