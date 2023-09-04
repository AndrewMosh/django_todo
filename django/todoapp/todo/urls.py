from django.urls import path
from .views import TaskListCreate
from .views import TaskDetailView

urlpatterns = [
    path("api/tasks/", TaskListCreate.as_view(), name="task-list-create"),
    path("api/tasks/<int:pk>/", TaskDetailView.as_view(), name="task-detail"),
]
