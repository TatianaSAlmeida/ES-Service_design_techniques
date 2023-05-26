from __future__ import print_function

import boto3
from decimal import Decimal
import json
import urllib

def index_faces(bucket, key):

    response = rekognition.index_faces(
        Image={"S3Object":
            {"Bucket": bucket,
            "Name": key}},
            CollectionId="famouspersons")
    return response

def update_index(tableName,faceId, fullName):
    response = dynamodb.put_item(
        TableName=tableName,
        Item={
            'RekognitionId': {'S': faceId},
            'FullName': {'S': fullName}
            }
        ) 

def lambda_handler(event):

    # Get the object from the event
    bucket_name = event['Records'][0]['s3']['bucket']['name']
    key = event['Records'][0]['s3']['object']['key']

    try:
        response = index_faces(bucket_name, key)
        
        if response['ResponseMetadata']['HTTPStatusCode'] == 200:
            faceId = response['FaceRecords'][0]['Face']['FaceId']

            ret = s3.head_object(Bucket=bucket_name,Key=key)
            personFullName = ret['Metadata']['fullname']

            update_index('face_recognition',faceId,personFullName)

        print(response)
        return response
    except Exception as e:
        print(e)
        print("Error processing object {} from bucket {}. ".format(key, bucket_name))
        raise e
    


s3 = boto3.resource('s3')

# Get list of objects for indexing
images=[('images/edgar.png','Edgar Duarte'),
      ('images/sofia.jpg','Sofia Neves'),
      ('images/tatiana.jpg','Tatiana Almeida')
      ]

dynamodb = boto3.client('dynamodb')
rekognition = boto3.client('rekognition')

# Iterate through list to upload objects to S3   
for image in images:
    file = open(image[0],'rb')
    object = s3.Object('randompersons-images','index/'+ image[0])
    ret = object.put(Body=file,
                    Metadata={'FullName':image[1]})
    



