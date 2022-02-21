from django.test import TestCase
from django.urls import reverse

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
        resp = self.client.get(reverse('routes'))
        self.assertEqual(resp.status_code, 200)

    def test_view_notes(self):
        resp = self.client.get(reverse('notes'))
        self.assertEqual(resp.status_code, 200)

    def test_view_note(self):
        resp = self.client.get(reverse('note', kwargs={'pk':1}))
        self.assertEqual(resp.status_code, 200)
        print(resp.content)
