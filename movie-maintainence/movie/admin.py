from django.contrib import admin
from .models import Movie, Actor, MovieActor

class MovieAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'release_date', 'upvotes', 'downvotes', 'num_actors')

    def num_actors(self, obj):
        return MovieActor.objects.filter(movie=obj).count()

class ActorAdmin(admin.ModelAdmin):
    list_display = ('name', 'date_of_birth', 'num_movies')

    def num_movies(self, obj):
        return MovieActor.objects.filter(actor=obj).count()

class MovieActorAdmin(admin.ModelAdmin):
    list_display = ('movie', 'actor')

admin.site.register(Movie, MovieAdmin)
admin.site.register(Actor, ActorAdmin)
admin.site.register(MovieActor,MovieActorAdmin)
