from django.db import models

# Two tables for scalability purposes
# Textbook Table:
class textbook(models.Model):
    # Filled during book posting
    book_id      = models.PostiveIntegerField()
    date_added   = models.DateField(max_length=50)
    isbn         = models.PositiveIntegerField()
    subject      = models.CharField(max_length=5)
    class_id     = models.PositiveIntegerField()
    title        = models.CharField(max_length=100)
    edition      = models.CharField(max_length=20)
    price        = models.PositiveIntegerField()
    donate       = models.BooleanField()
    present      = models.BooleanField()

    # Completed during buying process
    sold          = models.BooleanField()
    paid          = models.BooleanField()
    date_removed  = models.DateField(max_length=50)

    #buyer/seller data, reference to user table for consistancy
    seller_id = models.ForeignKey('user', on_delete=models.PROTECT)
    buyer_id = models.ForeignKey('user', on_delete=models.PROTECT)

    def is_valid(self):
        if not present:
            #compare time

# User Table:
class user(models.Model):
    user_id = models.PostiveIntegerField(primary_key=True)
    name  = models.CharField(max_length=50)
    email = models.CharField(max_length=100, unique=True)
    phone = models.PostiveIntegerField()
    venmo = models.CharField(max_length=50)
    def __str__(self):
        return self.user_id

