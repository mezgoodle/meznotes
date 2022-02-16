from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_routes, name='routes'),
    path('workouts/', views.get_workouts, name='workouts'),
    path('workouts/<str:pk>/', views.get_workout, name='workout'),
]
