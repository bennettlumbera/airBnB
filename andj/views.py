from django.shortcuts import render
from django.http import JsonResponse, HttpResponse

from .allmodels.users import User

# Create your views here.
def index(request):
    return JsonResponse({'name': 'Noidhbio'})
