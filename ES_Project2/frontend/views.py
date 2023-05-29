from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from .verify_if_exists import check_face
from PIL import Image

# Create your views here.
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')




@api_view(['GET'])
def face_recognition(request, *args, **kwargs):
    return render(request, 'frontend/index.html')

@api_view(['POST'])
def face_recognition_verifier(request, *args, **kwargs):

    print(request.data["image"]) 
    response = check_face(request.data["image"])

    if(response):
        #TODO
        #Update payment to completed
        #Start robot process        
        return Response({'message': 'Valid', 'name': response})
    else:
        return Response({'message': 'Invalid'})



def confirm_payment(request, *args, **kwargs):    
    return render(request, 'frontend/a.html')
