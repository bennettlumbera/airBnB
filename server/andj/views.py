from __future__ import unicode_literals
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse

from .models import User

# Create your views here.
def index(request):
    print "REQUEST IS:"
    print request
    print "HIT INDEX METHOD BE"
    user = 
    return JsonResponse({'created': 'true'})
