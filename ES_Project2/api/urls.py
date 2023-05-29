
from django.urls import include, path
from rest_framework import routers

from .views import NameView, PharmacistViewSet, PurchaseViewSet, api_login, api_purchase

router = routers.DefaultRouter()
router.register(r'name', NameView)
router.register(r'pharmacist', PharmacistViewSet)
router.register(r'purchase', PurchaseViewSet)

urlpatterns = [
   path('', include(router.urls)),
   path('login/', api_login, name='login'),
   path('createPurchase/', api_purchase, name='purchase')
]