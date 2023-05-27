from django.shortcuts import render

# Create your views here.
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')


def face_recognition(request, *args, **kwargs):
    print("SDFASDFSDFASFWESDF")

    context = {
            'users': 'aaaa',
            'files': 'bbb',
        }

    return render(request, 'frontend/a.html', context)


def confirm_payment(request, *args, **kwargs):
    
    print("AAAAAAA")
    context = {
            'users': 'ccccc',
            'files': 'ddddd',
        }
    
    return render(request, 'frontend/a.html', context)
