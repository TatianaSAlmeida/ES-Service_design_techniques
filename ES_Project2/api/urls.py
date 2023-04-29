
from django.urls import path
from .views import NameView

urlpatterns = [
    path('name', NameView.as_view()), 
]