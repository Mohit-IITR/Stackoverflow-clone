from django.contrib import admin
from .models import *

admin.site.register([Tags,Questions,Answers])
