from django.shortcuts import render
from django.http import HttpResponse
from . import models
from django.contrib.auth.models import User
from django.utils import timezone
from faker import Factory

ROW = 100000


def getFakeData(type='name'):
    fake = Factory.create('it_IT')
    return fake

def getUser():
    return User.objects.get(username='admin')


def category(request):
    fake = getFakeData()
    for i in range(ROW):
        ins = models.ProductCategory()
        ins.name = fake.name()
        ins.code = f'code-{i}'
        ins.description = fake.address()
        ins.status = fake.boolean()
        ins.create_user = getUser()
        ins.write_user = getUser()
        ins.created_at = timezone.now()
        ins.modified_at = timezone.now()
        ins.deleted_at = timezone.now()
        ins.save()
        print(f'-------{i}')

    return HttpResponse("<H1>All Data Entry Done</h1>")


def inventory(request):
    fake = getFakeData()
    for i in range(ROW):
        ins = models.ProductInventory()
        ins.name = fake.name()
        ins.quantity = fake.building_number()
        ins.status = fake.boolean()
        ins.create_user = getUser()
        ins.write_user = getUser()
        ins.created_at = timezone.now()
        ins.modified_at = timezone.now()
        ins.deleted_at = timezone.now()
        ins.save()
        print(f'-------{i}')

    return HttpResponse("<H1>All Data Entry Done</h1>")
