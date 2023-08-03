from django.urls import path
from .views import *

urlpatterns = [
    path('', getRoute, name="get_route"),
    path('notes/', getNote, name="notes"),
    path('notes/create', createNote, name="notes_create"),
    path('notes/<str:pk>', getNoteId, name="notes_id"),
    path('notes/<str:pk>/update', updateNote, name="update_note"),
    path('notes/<str:pk>/delete', deleteNote, name="delete_note"),
]
