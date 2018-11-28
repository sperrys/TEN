from rest_framework import serializers
from .models import *

class SellSerializer(serializers.ModelSerializer):

	class Meta:

		model = Textbook
		fields = ('post_id', )
		# , 'isbn','subject','class_id','title','edition','price')
