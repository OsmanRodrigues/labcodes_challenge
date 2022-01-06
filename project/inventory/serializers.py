from rest_framework import serializers

from inventory.models import Category, Product


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


class QuantitySerializer(serializers.Serializer):
    quantity = serializers.IntegerField()
