from django.contrib import admin

from inventory.models import Product


class ProductAdmin(admin.ModelAdmin):
    list_display = ['code', 'name', 'available_quantity', 'category']

admin.site.register(Product, ProductAdmin)
