from rest_framework import serializers
from .models import *


class SellSerializer(serializers.ModelSerializer):
	class Meta:
		model = Textbook
		fields = ('post_id', 'date_added', 'subject','isbn','class_id','title',
			      'edition','price','paid_type','date_sold','buyer_id')

