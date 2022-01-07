from django.contrib import admin

from inventory.models import Category, Product

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'code']

admin.site.register(Category, CategoryAdmin)


class ProductAdmin(admin.ModelAdmin):
    list_display = ['code', 'name', 'available_quantity', 'category']

admin.site.register(Product, ProductAdmin)
