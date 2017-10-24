from __future__ import unicode_literals
from django.shortcuts import render
from django.forms.models import model_to_dict
from models import User 
from django.http import JsonResponse, HttpResponse
from django.forms.models import model_to_dict
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers
from member.models import User
from place.models import Place
import json

# Create your views here.
@csrf_exempt
def index(request):
    print "REQUEST IS:"
    print request.body
    registration = User.objects.valid_registration(request.body)
    print "REGISTRATION"
    print registration
    print "REQUEST.SESSION"
    print request.session
    if 'user' in registration:
        request.session["user_id"] = registration["user"].id
        print "USER ID IS"
        print request.session["user_id"]
        print registration["user"]
        newUser = User.objects.filter(id=request.session["user_id"])
        print type(newUser)
        print newUser
        # return JsonResponse(newUser[0], safe = False)
        # return JsonResponse({'user_id' : newUser})
        return HttpResponse(serializers.serialize('json', newUser ), content_type = 'application/json')
    else:
        return JsonResponse(registration['messages']) 

@csrf_exempt       
def login(request):
    print "REQUEST:"
    print request.body
    login = User.objects.existing_user(request.body)
    print login
    if 'user' in login:
        request.session["user_id"] = login["user"].id
        print request.session["user_id"]
        loggedInUser = User.objects.filter(id=request.session["user_id"])
        print "logged in user query login"
        print loggedInUser[0].id
        return HttpResponse(serializers.serialize('json', loggedInUser), content_type = 'application/json')
    else:
        return JsonResponse(login['messages'])    

def logout(request):
    print "IN LOG OUT"
    try:
        del request.session['user_id']
    except KeyError:
        return HttpResponse("You're logged out.")

def showProfile(request, id):
    print "Request in show profile views.py" 
    user = User.objects.filter(id = id)
    print user[0]
    return HttpResponse(serializers.serialize('json', user), content_type = 'application/json')

# def showCurrProfile(request):
#     print "Show Profile"
#     user = User.objects.filter(id=11)
#     return HttpResponse(serializers.serialize('json', user), content_type = 'application/json')
    
