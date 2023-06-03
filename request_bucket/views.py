from django.shortcuts import redirect,render
from django.http import JsonResponse
import json
from django.contrib.auth import logout,login

def default_view(request):
    return render(request,'index.html')

def get_cookies(request):
    # logout(request)    
    return JsonResponse({"cookies":request.COOKIES})