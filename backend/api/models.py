from django.db import models

# Two tables for scalability purposes
# Textbook Table:
class textbook(models.Model):
    email = models.CharField(max_length=100)
    date_added = models.DateField(max_length=50)
    date_removed = models.DateField(max_length=50)
    isbn = models.PositiveIntegerField()
    subject = models.CharField(max_length=5)
    class_id = models.PositiveIntegerField()
    title = models.CharField(max_length=100)
    edition = models.CharField(max_length=20)
    price = models.PositiveIntegerField()
    donate = models.BooleanField()
    sold = models.BooleanField()
    venmo_yes = models.BooleanField() #if no, cash
    paid = models.BooleanField()
    book_id = models.PostiveIntegerField()


# User Table:
class user(models.Model):
    name  = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    phone = models.PostiveIntegerField()
    venmo = models.CharField(max_length=50)
