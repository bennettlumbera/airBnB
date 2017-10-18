from __future__ import unicode_literals
from django.db import models
import json
import re
import bcrypt

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.
class UserManager(models.Manager):
    def valid_registration(self, user_info):
        user_info = json.loads(user_info)
        messages = {
            'firstName': [],
            'lastName': [],
            'email': [],
            'birthday': [],
            'password': [],
            'phone': [],
            'city': [],
            'country': [],
            'zip': [],
        }
        valid = True
        if not user_info.get('firstName', '').isalpha():
            messages["firstName"].append("First name must be all letters.")
            valid = False
        if len(user_info.get('firstName', "")) < 2:
            messages["firstName"].append("First name must be 2 or more characters long.")
            valid = False
        if not user_info.get('lastName', '').isalpha():
            messages["lastName"].append("Last name must be all letters.")
            valid = False
        if len(user_info.get('lastName', '')) < 2:
            messages["lastName"].append("Last name must be 2 or more characters long.")
            valid = False
        if not EMAIL_REGEX.match(user_info.get('email', '')):
            messages['email'].append("Email is not a valid email.")
            valid = False
        if User.objects.filter(email=user_info.get('email', '')):
            messages['email'].append("This email already exists.")
            valid = False
        if len(user_info.get('dob', '')) < 6:
            messages['birthday'].append("Birthday must be 6 characters long.")
            valid = False
        if len(user_info.get('password', '')) < 7:
            messages['password'].append("Password is too short.")
            valid = False
        if user_info.get('password', '') != user_info.get('passwordConfirm', ''):
            messages['password'].append("Passwords do not match.")
            valid = False
        if not user_info.get('phone', '').isdigit():
            messages['phone_number'].append("Phone number must be all digits.")
            valid = False
        if len(user_info.get('country', '')) < 2:
            messages['country'].append("Country must be 2 or more characters long.")
            valid = False
        if len(user_info.get('zip', '')) < 5:
            messages['zip'].append("Zip code must be at least 5 characters.")
            valid = False
        if not user_info.get('zip', '').isdigit():
            messages['zip'].append("Zip code must be all digits.")
        if valid == True:
            hashed = bcrypt.hashpw(user_info.get('password', '').encode(), bcrypt.gensalt())
            user = User.objects.create(
                first_name=user_info.get('firstName', ''),
                last_name=user_info.get('lastName', ''),
                birthday=user_info.get('dob', ''),
                email=user_info.get('email', ''),
                password=hashed,
                phone_number=user_info.get('phone', ''),
                country=user_info.get('country', ''),
                zip_code=user_info.get('zip', '')
            )
            user.save()
            return {'user' : user}
        else:
            return {'messages': messages}

    def existing_user(self, user_info):
        messages = {
            'email': [],
            'password': []
        }
        valid = True
        if not EMAIL_REGEX.match(user_info['email']):
            messages['email'].append("Email is not a valid email.")
            valid = False
        if User.objects.filter(email=user_info['email']):
            hashed = User.objects.get(email=user_info['email']).password
            hashed = hashed.encode('utf-8')
            password = user_info['password']
            password = password.encode('utf-8')
            if bcrypt.hashpw(password, hashed) == hashed:
                valid = True
            else:
                messages['password'].append("Incorrect password.")
                valid = False
        else:
            messages['email'].append("Your email is not correct.")
            valid = False
        if valid == True:
            user = User.objects.filter(email=user_info['email'])[:1]
            return {'user': user}
        else:
            return {'messages': messages}


class User(models.Model):
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    email = models.EmailField()
    birthday = models.DateField()
    password = models.CharField(max_length=256)
    phone_number = models.CharField(max_length=10)
    country = models.CharField(max_length=30)
    zip_code = models.IntegerField()
    # profile_image = models.ImageField(upload_to="profile_pic/", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
    # objects = models.Manager()


class Guest(models.Model):
    user = models.ForeignKey(User, related_name="user_guest")
    about_me = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Host(models.Model):
    user = models.ForeignKey(User, related_name="user_host")
    about_me = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
