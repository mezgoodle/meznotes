from django.test import TestCase

from .models import Note

class NoteModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Note.objects.create(body='Test note')

    def test_body_content(self):
        note = Note.objects.get(id=1)
        expected_object_body = 'Test note'
        self.assertEquals(expected_object_body, note.body)
