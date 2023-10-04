from django.test import TestCase
from api_db import models
from django.contrib.auth.models import User
from django.utils import timezone
import faker
from faker import Factory

USERNAME = 'admin'


class ModelTest(TestCase):

    def getFakeData(self, type='name'):
        fake = Factory.create('it_IT')
        return fake

    def testCreateUser(self):
        user = User.objects.create(username=USERNAME)
        self.assertEquals(user.username, USERNAME)

    def checkInstance(self, ins):
        print(f"-------{ins} successfully completed-----")

    def createProductCategory(self, user, name):
        ins = models.ProductCategory()
        ins.name = name
        ins.code = '011'
        ins.status = True
        ins.description = 'Local or international fruits'
        ins.create_user = user
        ins.write_user = user
        ins.save()

        return ins

    def testProductCategory(self):
        user = User.objects.create(username=USERNAME)
        name = self.getFakeData().name()
        ins = self.createProductCategory(user, name)

        self.assertEquals(ins.name, name)
        self.assertTrue(isinstance(ins, models.ProductCategory))
        self.checkInstance(ins)

    def createInventory(self, user, name):
        ins = models.ProductInventory()
        ins.name = name
        ins.quantity = 500
        ins.status = False
        ins.create_user = user
        ins.write_user = user
        ins.save()
        return ins

    def testProductInventory(self):
        user = User.objects.create(username=USERNAME)
        name = self.getFakeData().name()

        ins = self.createInventory(user, name)

        self.assertEquals(ins.name, name)
        self.assertTrue(isinstance(ins, models.ProductInventory))
        self.checkInstance(ins)

    def create_payment(self, amount, user):
        ins = models.PaymentDetails()
        ins.amount = amount
        ins.provider = self.getFakeData().name()
        ins.status = True
        ins.create_user = user
        ins.write_user = user
        ins.save()
        return ins

    def testPaymentDetails(self):
        user = User.objects.create(username=USERNAME)
        amount = 2000
        ins = self.create_payment(amount, user)

        self.assertEquals(ins.amount, amount)
        self.assertTrue(isinstance(ins, models.PaymentDetails))
        self.checkInstance(ins)

    def createOrder(self, user, total_price):
        ins = models.OrderDetails()
        ins.total_price = total_price
        ins.user = user
        ins.payment = self.create_payment(300, user)
        ins.create_user = user
        ins.write_user = user
        ins.save()
        return ins

    def testOrderDetails(self):
        user = User.objects.create(username=USERNAME)
        total_price = 130.90

        ins = self.createOrder(user, total_price)

        self.assertEquals(ins.total_price, total_price)
        self.assertTrue(isinstance(ins, models.OrderDetails))
        self.checkInstance(ins)

    def createDiscount(self, user, name):
        ins = models.Discount()
        ins.name = name
        ins.description = self.getFakeData().name()
        ins.discount_percent = 12
        ins.status = True
        ins.create_user = user
        ins.write_user = user
        ins.save()
        return ins

    def testDiscount(self):
        user = User.objects.create(username=USERNAME)
        name = self.getFakeData().name()
        ins = self.createDiscount(user, name)

        self.assertEquals(ins.name, name)
        self.assertTrue(ins, models.Discount)
        self.checkInstance(ins)

    def testShoppingSession(self):
        user = User.objects.create(username=USERNAME)
        total = 2000

        ins = models.ShoppingSession()
        ins.total = total
        ins.user = user
        ins.create_user = user
        ins.write_user = user
        ins.save()

        self.assertEquals(ins.total, total)
        self.assertTrue(isinstance(ins, models.ShoppingSession))
        self.checkInstance(ins)

    def testUserAddresses(self):
        user = User.objects.create(username=USERNAME)
        postal_code = 200

        ins = models.UserAddresses()
        ins.user = user
        ins.address_line1 = self.getFakeData().name()
        ins.address_line2 = self.getFakeData().name()
        ins.city = self.getFakeData().name()
        ins.postal_code = postal_code
        ins.country = self.getFakeData().name()
        ins.mobile = self.getFakeData().name()
        ins.telephone = self.getFakeData().name()
        ins.create_user = user
        ins.write_user = user
        ins.save()

        self.assertEquals(ins.postal_code, postal_code)
        self.assertTrue(isinstance(ins, models.UserAddresses))
        self.checkInstance(ins)

    def testUserPayment(self):
        user = User.objects.create(username=USERNAME)
        account_no = '1239876554'

        ins = models.UserPayment()
        ins.user = user
        ins.payment_type = self.getFakeData().name()
        ins.provider = self.getFakeData().name()
        ins.account_no = account_no
        ins.expires_at = timezone.now()
        ins.create_user = user
        ins.write_user = user
        ins.save()

        self.assertEquals(ins.account_no, account_no)
        self.assertTrue(isinstance(ins, models.UserPayment))
        self.checkInstance(ins)

    def testProducts(self):
        user = User.objects.create(username=USERNAME)
        name = self.getFakeData().name()

        ins = models.Products()
        ins.name = name
        ins.description = self.getFakeData().name()
        ins.sku = '1234567'
        ins.price = 200
        ins.category = self.createProductCategory(user, self.getFakeData().name())
        ins.inventory = self.createInventory(user, self.getFakeData().name())
        ins.discount = self.createDiscount(user, '20')
        ins.create_user = user
        ins.write_user = user
        ins.save()

        self.assertEquals(ins.name, name)
        self.assertTrue(isinstance(ins, models.Products))
        self.checkInstance(ins)

    def testOrderItems(self):
        user = User.objects.create(username=USERNAME)
        quantity = 200

        ins = models.OrderItems()
        ins.quantity = quantity
        ins.order_id = self.createOrder(user, '120')
        ins.create_user = user
        ins.write_user = user
        ins.save()

        self.assertEquals(ins.quantity, quantity)
        self.assertTrue(isinstance(ins, models.OrderItems))
        self.checkInstance(ins)

    def testCartItem(self):
        user = User.objects.create(username=USERNAME)
        quantity = 200

        ins = models.CartItem()
        ins.quantity = quantity
        ins.create_user = user
        ins.write_user = user
        ins.save()

        self.assertEquals(ins.quantity, quantity)
        self.assertTrue(isinstance(ins, models.CartItem))
        self.checkInstance(ins)
