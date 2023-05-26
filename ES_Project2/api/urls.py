
from django.urls import path
from .views import *

urlpatterns = [
    path('name', NameView.as_view()), 
    path('api/login/', api_login, name='api_login'),

]