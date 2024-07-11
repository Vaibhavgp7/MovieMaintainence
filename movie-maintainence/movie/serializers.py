from rest_framework import serializers
from .models import Movie, Actor, MovieActor

class MovieSerializer(serializers.ModelSerializer):
    num_actors = serializers.SerializerMethodField()

    class Meta:
        model = Movie
        fields = ['id', 'title', 'description', 'release_date', 'upvotes', 'downvotes', 'num_actors']

    def get_num_actors(self, obj):
        return MovieActor.objects.filter(movie=obj).count()

class ActorSerializer(serializers.ModelSerializer):
    num_movies = serializers.SerializerMethodField()

    class Meta:
        model = Actor
        fields = ['id', 'name', 'date_of_birth', 'num_movies']

    def get_num_movies(self, obj):
        return MovieActor.objects.filter(actor=obj).count()
