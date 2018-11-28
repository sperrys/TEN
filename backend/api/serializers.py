from rest_framework import serializers
from .models import *

class userSerializer(serializers.ModelSerializer):

    class Meta:
        model = user
        fields = ('email', 'venmo')
class SellSerializer(serializers.ModelSerializer):
	seller = userSerializer()
	buyer = userSerializer()
	class Meta:
		model = Textbook
		fields =  ('__all__')

