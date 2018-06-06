from django.conf.urls import url
from rest_framework import routers
from todo.views import TaskSerializerView

router = routers.DefaultRouter()
router.register('tasks', TaskSerializerView)

urlpatterns = router.urls