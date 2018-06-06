from django.db import models

# Create your models here.
class Task(models.Model):
    title       = models.CharField(max_length=100)
    description = models.CharField(max_length=250, blank=True, null=True)
    date_added  = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Task'
        verbose_name_plural = 'Tasks'