from __future__ import unicode_literals
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse

# Create your views here.
def index(request):
    return JsonResponse({'name': 'Noidhbio'})
