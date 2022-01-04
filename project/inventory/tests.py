from rest_framework.test import APITestCase as TestCase
from django.urls import reverse_lazy

from model_bakery import baker

from inventory.models import Product


class ListProductsEndpointTests(TestCase):
    url = reverse_lazy('inventory:list')

    def test_list_products(self):
        products = baker.make(Product, _quantity=3, _fill_optional=True)

        response = self.client.get(self.url)
        expected_content = [
            {
                "name": p.name,
                "description": p.description,
                "code": p.code,
                "available_quantity": p.available_quantity
            } for p in products
        ]

        self.assertEqual(200, response.status_code)
        self.assertEqual(expected_content, response.json())


class ProductDetailEndpointTests(TestCase):
    url = reverse_lazy('inventory:detail', args=["xpto-code"])

    def test_get_product(self):
        product = baker.make(Product, code='xpto-code')
        expected_content = {
            "name": product.name,
            "description": product.description,
            "code": product.code,
            "available_quantity": product.available_quantity
        }

        response = self.client.get(self.url)

        self.assertEqual(200, response.status_code)
        self.assertEqual(expected_content, response.json())

    def test_404(self):
        response = self.client.get(self.url)
        self.assertEqual(404, response.status_code)


class UpdateProductQuantityEndpointTests(TestCase):
    url = reverse_lazy('inventory:update_product_quantity', args=["xpto-code"])

    def setUp(self):
        self.product = baker.make(
            Product, code='xpto-code', available_quantity=1000
        )

    def test_add_quantity(self):
        data = {'quantity': 100}

        response = self.client.post(self.url, data=data)

        self.assertEqual(200, response.status_code)
        self.assertEqual({'available_quantity': 1100}, response.json())

    def test_withdrawl_quantity(self):
        data = {'quantity': -100}

        response = self.client.post(self.url, data=data)

        self.assertEqual(200, response.status_code)
        self.assertEqual({'available_quantity': 900}, response.json())

    def test_bad_request_for_invalid_data(self):
        response = self.client.post(self.url, data={})

        self.assertEqual(400, response.status_code)
        self.assertIn('quantity', response.json())

    def test_404(self):
        self.product.delete()
        response = self.client.post(self.url, data={})
        self.assertEqual(404, response.status_code)
