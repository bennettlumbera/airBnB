from __future__ import unicode_literals
from django.db import models
from users import Guest
from users import Host

class Message(models.Model):
    guest = models.ForeignKey(Guest, related_name="guest_messages")
    host = models.ForeignKey(Host, related_name="host_messages")
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
