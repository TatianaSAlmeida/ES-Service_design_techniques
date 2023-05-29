
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', include('frontend.urls')),
    path('qrcode', include('frontend.urls')),
    path('face-recognition', include('frontend.urls')),
    path('list', include('frontend.urls'))
    path('confirm-payment', include('frontend.urls'))
]