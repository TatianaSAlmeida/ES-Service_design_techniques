from django.shortcuts import render

# Create your views here.
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')


def face_recognition(request, *args, **kwargs):
    print("SDFASDFSDFASFWESDF")
    return render(request, 'frontend/a.html')

