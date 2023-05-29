from django.urls import include, path
from rest_framework import routers

from .views import NameView, PharmacistViewSet, PurchaseViewSet, api_login, api_purchase, api_get_purchase

from django.urls import path
from .views import NameView

urlpatterns = [
   path('', include(router.urls)),
   path('login/', api_login, name='login'),
   path('createPurchase/', api_purchase, name='purchase'),
   path('get_purchases/', api_get_purchase, name='get_purchase')
]