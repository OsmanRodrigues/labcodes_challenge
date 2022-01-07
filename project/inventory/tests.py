from rest_framework.test import APITestCase as TestCase
from django.urls import reverse_lazy

from model_bakery import baker

from inventory.models import Category, Product


class InventoryListsEndpointTests(TestCase):

    def test_list_products(self):
        url = reverse_lazy('inventory:list')
        products = baker.make(Product, _quantity=3, _fill_optional=True)

        response = self.client.get(url)
        expected_content = [
            {
                "code": p.code,
                "name": p.name,
                "available_quantity": p.available_quantity,
                "description": p.description,
                "category": p.category.code
            } for p in products
        ]
        self.assertEqual(200, response.status_code)
        self.assertEqual(expected_content, response.json())

        print('Get list products: OK')

    def test_list_categories(self):
        url = reverse_lazy('inventory:list_category')
        categories = baker.make(Category, _quantity=4, _fill_optional=True)

        response = self.client.get(url)
        expected_content = [
            {
                "name": c.name,
                "code": c.code
            } for c in categories
        ]

        self.assertEqual(200, response.status_code)
        self.assertEqual(expected_content, response.json())

        print('Get list categories: OK')


class ProductDetailEndpointTests(TestCase):
    url = reverse_lazy('inventory:detail', args=["xpto-code"])

    def test_get_product(self):
        product = baker.make(Product, code='xpto-code')
        expected_content = {
            "code": product.code,
            "name": product.name,
            "available_quantity": product.available_quantity,
            "description": product.description,
            "category": product.category.code
        }

        response = self.client.get(self.url)

        self.assertEqual(200, response.status_code)
        self.assertEqual(expected_content, response.json())

        print('Get product: OK')

    def test_404(self):
        response = self.client.get(self.url)
        self.assertEqual(404, response.status_code)

        print('Product GET endpoint not found (error 404): OK')


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

        print('Add product quantity: OK')

    def test_withdrawl_quantity(self):
        data = {'quantity': -100}

        response = self.client.post(self.url, data=data)

        self.assertEqual(200, response.status_code)
        self.assertEqual({'available_quantity': 900}, response.json())

        print('Withdrawl product quantity: OK')

    def test_bad_request_for_invalid_data(self):
        response = self.client.post(self.url, data={})

        self.assertEqual(400, response.status_code)
        self.assertIn('quantity', response.json())

        print('Bad request for invalid data: OK')

    def test_404(self):
        self.product.delete()
        response = self.client.post(self.url, data={})
        self.assertEqual(404, response.status_code)

        print('Product POST endpoint not found (error 404): OK')
