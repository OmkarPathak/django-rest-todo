from rest_framework import serializers
from .models import Task
# from django.contrib.auth import User

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
    
    # def validate_title(self, value):
    #     if Task.objects.filter(title=value).exists():
    #         raise serializers.ValidationError('Title must be unique!')
    #     return value


# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = User
#         fields = ('url', 'username', 'email', 'is_staff')