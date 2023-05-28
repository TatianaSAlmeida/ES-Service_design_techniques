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
    print("wasdqwqwdqwe")
    return render(request, 'frontend/index.html')

@api_view(['POST'])
def face_recognition_verifier(request, *args, **kwargs):

    print(request.data["image"]) 
    response = check_face(request.data["image"])

    if(response):
        #TODO create payment in the relational data base and start robot execution.
        return Response({'message': 'Valid', 'name': response})
    else:
        return Response({'message': 'Invalid'})



def confirm_payment(request, *args, **kwargs):
    
    print("werwerwerwer")
  
    
    return render(request, 'frontend/a.html')
