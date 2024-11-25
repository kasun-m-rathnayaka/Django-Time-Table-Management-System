from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from api.models import Course
from api.serializers import CourseSerializer


class SubjectCreate(generics.CreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        if (serializer.is_valid()):
            serializer.save()
        else:
            print(serializer.errors)

class SubjectDelete(generics.DestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated]

class SubjectUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated]
