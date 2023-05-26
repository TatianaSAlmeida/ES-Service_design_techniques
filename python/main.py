import boto3
import requests
from PIL import Image, ImageDraw, ImageFont



def get_image_from_file(filename):
    with open(filename, 'rb') as imgfile:
        return imgfile.read()



def main():
    rekognition = boto3.client('rekognition')
    #rekognition = boto3.client('rekognition', aws_access_key_id='<YOUR_ACCESS_KEY>', aws_secret_access_key='<YOUR_SECRET_KEY>', region_name='us-east-1')
    
    imgfilename = 'python\images\edgar.png'

    imgbytes = get_image_from_file(imgfilename)
    
    result = rekognition.detect_faces(Image = {'Bytes': imgbytes})

    print(result)


    pass



if __name__ == '__main__':
    main()