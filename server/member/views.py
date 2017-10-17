from django.http import JsonResponse, HttpResponse
from django.forms.models import model_to_dict
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers
from member.models import User
from place.models import Place

# Create your views here.
def register(request):
    registration = User.UserManager.valid_registration(request.POST)
    if 'user' in registration:
        user = {
            'first_name': registration["user"]["first_name"],
            'user_id': registration["user"]["id"]
        }
        return JsonResponse(user)
    else:
        return JsonResponse(registration['messages'])
