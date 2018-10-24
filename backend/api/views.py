from django.shortcuts import render

# Create views here!
class ListBookRaw(APIView):

    def get(self, request, format=None):
        """
        Return a list of all books.
        """
        queryset = Textbook.objects.all()
        serializer = SellSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        """
        How might a post request work?
        """
        pass

class 