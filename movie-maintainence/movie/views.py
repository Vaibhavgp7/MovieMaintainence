from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Movie, Actor
from .serializers import MovieSerializer, ActorSerializer
from django.shortcuts import redirect

def redirect_to_api(request):
    return redirect('/api/')

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    ordering_fields = ['title', 'release_date']

    def get_queryset(self):
        queryset = super().get_queryset()
        ordering = self.request.query_params.get('ordering', None)
        if ordering:
            queryset = queryset.order_by(ordering)
        return queryset

    @action(detail=True, methods=['post'])
    def upvote(self, request, pk=None):
        movie = self.get_object()
        movie.upvotes += 1
        movie.save()
        return Response({'status': 'movie upvoted'})

    @action(detail=True, methods=['post'])
    def downvote(self, request, pk=None):
        movie = self.get_object()
        movie.downvotes += 1
        movie.save()
        return Response({'status': 'movie downvoted'})

class ActorViewSet(viewsets.ModelViewSet):
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer
