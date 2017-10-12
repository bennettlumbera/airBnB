from __future__ import unicode_literals
from django.shortcuts import render
from django.http import JsonResponse
from django.forms.models import model_to_dict
from .models import User 
# Create your views here.

def index(request):
    print "HIT INDEX METHOD BE"
    return JsonResponse({'name': 'Noidhbio'})


