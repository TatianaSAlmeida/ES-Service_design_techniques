#Adatped from https://hands-on.cloud/boto3-step-functions-tutorial/
import boto3
import json

step_functions_client = boto3.client('stepfunctions')

state_machine_arn = "arn:aws:states:us-east-1:291038237275:stateMachine:MyStateMachine"

input_json = {"action": "Retrieve", "id": 1}

try:
    step_functions_client.start_execution(
                    stateMachineArn=state_machine_arn, input=json.dumps(input_json))
    
except Exception as e:
    print(e)


