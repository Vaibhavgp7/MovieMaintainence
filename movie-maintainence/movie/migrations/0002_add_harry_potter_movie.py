from django.db import migrations
from django.utils.timezone import make_aware
from datetime import datetime

def add_harry_potter_movie(apps, schema_editor):
    Movie = apps.get_model('movie', 'Movie')
    harry_potter = Movie(
        title="Harry Potter",
        release_date=make_aware(datetime.strptime("2001-09-01", "%Y-%m-%d")),
        description="Magical Realm",
        upvotes=0,
        downvotes=0
    )
    harry_potter.save()

class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0001_initial'),  # replace XXXX with the number of your last migration
    ]

    operations = [
        migrations.RunPython(add_harry_potter_movie),
    ]