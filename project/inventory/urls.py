from django.urls import path

from inventory.views import *

app_name = 'inventory'

urlpatterns = [
    path('', ListProductEndpoint.as_view(), name='list'),
    path('category', ListCategoryEndpoint.as_view(), name='list_category'),
    path('<slug:code>/update-quantity/', UpdateProductQuantityEndpoint.as_view(), name='update_product_quantity'),
    path('<slug:code>/', ProductDetailEndpoint.as_view(), name='detail'),
]
