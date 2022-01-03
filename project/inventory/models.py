from django.db import models
from django.utils.translation import ugettext_lazy as _


class Product(models.Model):
    code = models.CharField(max_length=255, verbose_name=_('Code'), primary_key=True)
    name = models.CharField(max_length=255, verbose_name=_('Product name'))
    available_quantity = models.IntegerField(verbose_name=_('Available quantity'))
    description = models.TextField(verbose_name=_('Description'), blank=True, default='')

    class Meta:
        verbose_name = _('Product')
        verbose_name_plural = _('Products')

    def __str__(self):
        return f'{self.code}: {self.name}'
