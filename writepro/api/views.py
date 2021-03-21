from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def apistatus(request):
    return HttpResponse("<h1>API status - Working</h1>")
