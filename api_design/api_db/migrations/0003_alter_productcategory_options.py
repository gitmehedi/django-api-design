# Generated by Django 4.2 on 2023-11-01 03:12

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("api_db", "0002_alter_cartitem_product_alter_cartitem_session_and_more"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="productcategory",
            options={"ordering": ["-id"]},
        ),
    ]
