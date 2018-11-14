from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Textbook

class TextbookTests(APITestCase):

    # Function run before to populate database for tests
    def setUp(self):
        self.jumbos = Textbook.objects.create(post_id=1)
        self.jumbolinas = Textbook.objects.create(post_id=2)
        self.monaco = Textbook.objects.create(post_id=3)

