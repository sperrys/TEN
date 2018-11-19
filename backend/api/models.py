from django.db import models
# Two tables for scalability purposes

#User Table:
class user(models.Model):
    user_id = models.PositiveIntegerField(primary_key=True)
    name  = models.CharField(max_length=50)
    email = models.CharField(max_length=100, unique=True)
    phone = models.PositiveIntegerField()
    venmo = models.CharField(max_length=50)

    def __str__(self):
        return self.name
        
# Textbook Table:
class Textbook(models.Model):
    # Filled during book posting
    post_id      = models.PositiveIntegerField(primary_key=True)
    date_added   = models.DateField(max_length=50, default="1111-11-11")
    subject      = models.CharField(max_length=50, default="SUBJECT")
    class_id     = models.PositiveIntegerField(default=0)
    price        = models.PositiveIntegerField(default=0)
    donate       = models.BooleanField(default=False)
    present      = models.BooleanField(default=False)
    isbn         = models.PositiveIntegerField(default=0)
    title        = models.CharField(max_length=100, default="TITLE")
    edition      = models.CharField(max_length=20, default="DEFAULT_EDITION")
    # Completed during buying process
    sold          = models.BooleanField(default=False)
    paid_type     = models.PositiveIntegerField(default=0) #0 not paid, 1 is cash, 2 is venmo
    date_sold     = models.DateField(max_length=50, default="1111-11-11")
    def __str__(self):
        return self.post_id
 

    #buyer/seller data, reference to user table for consistancy
    seller_id = models.ForeignKey('user', on_delete=models.CASCADE, related_name='seller_id')
    buyer_id = models.ForeignKey('user', null=True, on_delete=models.SET_NULL, related_name='buyer_id')
"""

    #def is_valid(self):
    #     if not present:
    #         compare time
"""


