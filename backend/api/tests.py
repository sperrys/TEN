from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from api.models import Textbook

class TextbookTests(APITestCase):

    # Function run before to populate database for tests
    def setUp(self):
        pass
