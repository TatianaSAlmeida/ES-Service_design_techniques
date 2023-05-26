#Adapted from https://github.com/teja156/amazon-rekognition-example/blob/main/lamdafunction.py

import boto3
import io
from PIL import Image

#Checks if the inputed face is or not a verified member in the current collection
def check_face(image_path):

    #Initialize the rekognition service and dynamodb db
    rekognition = boto3.client('rekognition', region_name='us-east-1')
    dynamodb = boto3.client('dynamodb', region_name='us-east-1')

    image = Image.open(image_path)
    stream = io.BytesIO()
    image.save(stream,format="JPEG")
    image_binary = stream.getvalue()

    #Looks for image in recognition collection
    response = rekognition.search_faces_by_image(
            CollectionId='firstcollection',
            Image={'Bytes':image_binary}                                       
            )

    #Goes through all the matches 
    found = False
    for match in response['FaceMatches']:
        
        #Retrieves Person from db by RekognitionId
        face = dynamodb.get_item(
            TableName='face_recognition',  
            Key={'RekognitionId': {'S': match['Face']['FaceId']}}
            )
        
        #If person is found then display a sucess message. TODO- RETURN VALUE TO CONFIRM TRANSACTION
        if 'Item' in face:
            print ("Found Person: ",face['Item']['FullName']['S'])
            found = True

    #User not found. TODO- RETURN VALUE NOT TO CONFIRM TRANSACTIONS
    if not found:
        print("Person cannot be recognized")


def main():
    image_path = input("Image Path: ")
    check_face(image_path)


if __name__ == '__main__':
    main()