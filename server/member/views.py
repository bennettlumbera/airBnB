from __future__ import unicode_literals
from django.shortcuts import render
<<<<<<< HEAD:server/andj/views.py
from django.http import JsonResponse, HttpResponse

from .models import User

=======
from django.http import JsonResponse
from django.forms.models import model_to_dict
from .models import User 
>>>>>>> upstream/master:server/member/views.py
# Create your views here.

def index(request):
    print "REQUEST IS:"
    print request
    print "HIT INDEX METHOD BE"
<<<<<<< HEAD:server/andj/views.py
    user = 
    return JsonResponse({'created': 'true'})
=======
    return JsonResponse({'name': 'Noidhbio'})


>>>>>>> upstream/master:server/member/views.py
