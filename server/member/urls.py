from django.conf.urls import url
from views import *


urlpatterns = [
    url(r'^register$', index),
    # url(r'^all$', getUsers, name='allUsers'),
    url(r'^login$', login, name='login'),
    # url(r'^logout$', logout, name='logout'),
    url(r'^profile/(?P<id>\d+)$', showProfile, name='showProfile'),
    # url(r'^currprofile$', showCurrProfile, name='showCurrProfile')
    
]
