from django.db import models

# Two tables for scalability purposes
# Textbook Table:
class Textbook(models.Model):
    # Filled during book posting
    post_id      = models.PostiveIntegerField()
    date_added   = models.DateField(max_length=50)
    subject      = models.CharField(max_length=5)
    class_id     = models.PositiveIntegerField()
    price        = models.PositiveIntegerField()
    donate       = models.BooleanField()
    present      = models.BooleanField()
    isbn         = models.PostiveIntegerField()
    title        = models.CharField(max_length=100)
    edition      = models.CharField(max_length=20)
    # Completed during buying process
    sold          = models.BooleanField()
    paid_type     = models.PostiveIntegerField() #0 not paid, 1 is cash, 2 is venmo
    date_sold     = models.DateField(max_length=50)

    #buyer/seller data, reference to user table for consistancy
    seller_id = models.ForeignKey('user', on_delete=models.PROTECT)
    buyer_id = models.ForeignKey('user', on_delete=models.PROTECT)

    def __str__(self):
        return self.post_id

    # def is_valid(self):
    #     if not present:
    #         compare time

# User Table:
class user(models.Model):
    user_id = models.PostiveIntegerField(primary_key=True)
    name  = models.CharField(max_length=50)
    email = models.CharField(max_length=100, unique=True)
    phone = models.PostiveIntegerField()
    venmo = models.CharField(max_length=50)

    def __str__(self):
        return self.user_id

