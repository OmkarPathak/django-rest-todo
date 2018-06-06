from django.urls import path
# from rest_framework import routers
from .views import add_task, retrieve_task, get_task, delete_task, edit_task

# router = routers.DefaultRouter()
# router.register('tasks', TaskSerializerView)

urlpatterns = [
    path('tasks/add/', add_task, name='add_task'),
    path('tasks/<int:id>/', get_task, name='get_task'),
    path('tasks/<int:id>/delete/', delete_task, name='delete_task'),
    path('tasks/<int:id>/edit/', edit_task, name='edit_task'),
    path('tasks/', retrieve_task, name='retrieve_task')
]