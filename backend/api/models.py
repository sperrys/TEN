from django.db import models

# Create models here!
class textbook(models.Model):
    date = models.DateField(max_length=50)
    isbn = models.PositiveIntegerField()
    subject = models.CharField(max_length=5)
    class_id = models.PositiveIntegerField()
    title = models.CharField(max_length=100)
    edition = models.CharField(max_length=20)
    price = models.PositiveIntegerField()
    email = models.CharField(max_length=100)
    phone = models.PostiveIntegerField()
    venmo = models.CharField(max_length=50)
    donate = models.BooleanField()
    book_id = models.PostiveIntegerField()
    sold = models.BooleanField()
    buyer_payment = models.CharField(max_length=50)
    paid = models.BooleanField()