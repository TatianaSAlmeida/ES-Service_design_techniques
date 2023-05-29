from django.urls import path
from .views import *

urlpatterns = [
    path('name', NameView.as_view()), 
    path('login/', api_login, name='login'),
    path('get_purchases/', api_get_purchase, name='get_purchase')
]