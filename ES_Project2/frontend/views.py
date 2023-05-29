from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from .verify_if_exists import check_face
import boto3
import json
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
        # step_functions_client = boto3.client('stepfunctions')  
        # state_machine_arn = "arn:aws:states:us-east-1:291038237275:stateMachine:MyStateMachine    "
        # input_json = {"action": "Retrieve", "id": request.data["payment_id"]}

        # try:
        #     step_functions_client.start_execution(
        #                     stateMachineArn=state_machine_arn, input=json.dumps(input_json))
            
        # except Exception as e:
        #     print(e)

        return Response({'message': 'Valid', 'name': response})
    else:
        return Response({'message': 'Invalid'})



def confirm_payment(request, *args, **kwargs):    
    return render(request, 'frontend/a.html')
