from django.conf.urls import url
from views import *


urlpatterns = [
    url(r'^register$', index)
    # url(r'^all$', getUsers, name='allUsers'),
    # url(r'^login$', login, name='login')
]
