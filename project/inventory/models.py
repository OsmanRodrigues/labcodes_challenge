from django.db import models
from django.utils.translation import ugettext_lazy as _


class Category(models.Model):
    name = models.CharField(max_length=255, verbose_name=_('Category name'), primary_key=True)
    code = models.IntegerField(verbose_name=_('Code'))

    class Meta:
        verbose_name = _('Category')
        verbose_name_plural = _('Categories')

    def __str__(self):
        return f'{self.name}'


class Product(models.Model):
    code = models.CharField(max_length=255, verbose_name=_('Code'), primary_key=True)
    name = models.CharField(max_length=255, verbose_name=_('Product name'))
    available_quantity = models.IntegerField(verbose_name=_('Available quantity'))
    description = models.TextField(verbose_name=_('Description'), blank=True, default='')
    category = models.ForeignKey('Category', on_delete=models.CASCADE)

    class Meta:
        verbose_name = _('Product')
        verbose_name_plural = _('Products')

    def __str__(self):
        return f'{self.code}: {self.name}'
