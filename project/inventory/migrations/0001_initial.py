# Generated by Django 2.2.2 on 2019-06-21 20:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
         migrations.CreateModel(
            name='Category',
            fields=[
                ('name', models.CharField(max_length=255, primary_key=True, verbose_name='Category name')),
                ('code', models.IntegerField(serialize=False, verbose_name='Code'))
            ],
            options={
                'verbose_name': 'Category',
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('code', models.CharField(max_length=255, primary_key=True, serialize=False, verbose_name='Code')),
                ('name', models.CharField(max_length=255, verbose_name='Product name')),
                ('available_quantity', models.IntegerField(verbose_name='Available quantity')),
                ('description', models.TextField(blank=True, default='', verbose_name='Description')),
                ('category', models.ForeignKey('Category', on_delete=models.CASCADE)),
            ],
            options={
                'verbose_name': 'Product',
                'verbose_name_plural': 'Products',
            },
        ),
    ]
