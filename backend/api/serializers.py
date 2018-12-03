from rest_framework import serializers
from .models import *

class userSerializer(serializers.ModelSerializer):

    class Meta:
        model = user
        fields = ('email', 'venmo')

class BrowseAllSerializer(serializers.ModelSerializer):
	seller = userSerializer()
	buyer = userSerializer()
	class Meta:
		model = Textbook
		fields =  ('__all__')

class PreSellSerializer(serializers.ModelSerializer):
	seller = userSerializer()
	class Meta:
		model = Textbook
		fields =  ('post_id','date_added', 'subject', 'class_id','price', 'donate',
			'isbn', 'title', 'edition', 'seller')
    
   
 