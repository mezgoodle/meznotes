from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from .models import Note


class NoteModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Note.objects.create(body='Test note')

    def test_body_content(self):
        note = Note.objects.get(id=1)
        expected_object_body = 'Test note'
        self.assertEquals(expected_object_body, note.body)


class ApiViewTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Note.objects.create(body='Test note')

    def test_view_routes(self):
        url = reverse('routes')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)

    def test_view_notes(self):
        url = reverse('notes')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)

    def test_view_note(self):
        url = reverse('note', kwargs={'pk': 1})
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)


class NoteTests(APITestCase):
    @classmethod
    def setUpTestData(cls):
        Note.objects.create(body='Test note')

    def test_create_note(self):
        url = reverse('notes')
        data = {'body': 'Test note'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Note.objects.count(), 2)
        self.assertEqual(Note.objects.first().body, 'Test note')

    def test_get_note(self):
        url = reverse('note', kwargs={'pk': 1})
        response = self.client.get(url)
        self.assertEqual(response.data['id'], 1)
        self.assertEqual(response.data['body'], 'Test note')
