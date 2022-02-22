from django.http import Http404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import status

from .models import Note
from .serializers import NoteSerializer


@api_view(['GET'])
def get_routes(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)


class NoteList(APIView):
    """
    List all notes, or create a new snippet.
    """
    def get(self, request, format=None):
        notes = Note.objects.all().order_by('-updated')
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        data = request.data
        note = Note.objects.create(
            body=data['body']
        )
        try:
            serializer = NoteSerializer(note, many=False)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class NoteDetail(APIView):
    """
    Retrieve, update or delete a note instance.
    """
    def get_object(self, pk: str):
        try:
            return Note.objects.get(pk=pk)
        except Note.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        note = self.get_object(pk)
        print(note)
        serializer = NoteSerializer(note, many=False)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        data = request.data
        note = self.get_object(pk)
        serializer = NoteSerializer(instance=note, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        note = self.get_object(pk)
        note.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def get_notes(request):
    notes = Note.objects.all().order_by('-updated')
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_note(request, pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def create_note(request):
    data = request.data
    note = Note.objects.create(
        body=data['body']
    )
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def update_note(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def delete_note(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response('Note was deleted')
