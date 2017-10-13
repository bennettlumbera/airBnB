from django.http import JsonResponse, HttpResponse
from django.forms.models import model_to_dict
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers
from member.models import User
from place.models import Place
# Create your views here.
def index(request):
    print "REQUEST IS:"
    print request
    print "HIT INDEX METHOD BE"
    return JsonResponse({'name': 'Noidhbio'})
