

from __future__ import print_function
import os
import boto3

#Adds images to s3 bucket. This will activate a lambda function that will write the object to the DB and to rekognition
def add_images(path):
      s3 = boto3.resource('s3')
      for filename in os.listdir(path):
            f = os.path.join(path, filename)
      
            file = open(f,'rb')
            object = s3.Object('randompersons-images','index/'+ f)
            object.put(Body=file,Metadata={'FullName':filename.split(".")[0]})
    
def main():
    path = "images_to_db/"
    add_images(path)

if __name__ == '__main__':
    main()
