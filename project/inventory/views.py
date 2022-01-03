from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView, Response

from django.shortcuts import get_object_or_404

from inventory.models import Product
from inventory.serializers import ProductSerializer, QuantitySerializer


class ListInventoryEndpoint(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailEndpoint(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'code'


class UpdateProductQuantityEndpoint(APIView):

    def post(self, request, code):
        product = get_object_or_404(Product, code=code)

        serializer = QuantitySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        product.available_quantity += serializer.validated_data['quantity']
        product.save()

        return Response({'available_quantity': product.available_quantity})
