from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
import 

# Create your views here.
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')




# @api_view(['GET'])
# def face_recognition(request, *args, **kwargs):
#     print("wasdqwqwdqwe")
#     return render(request, 'frontend/index.html')


def face_recognition(request, *args, **kwargs):
    if (request.method == 'POST'):
        print("wasdqwqwdqwe")
        return render(request, 'frontend/index.html')
    if (request.method == 'GET'):
        print("aaaaaaaa")
        return render(request, 'frontend/index.html')


def confirm_payment(request, *args, **kwargs):
    
    print("werwerwerwer")
  
    
    return render(request, 'frontend/a.html')
