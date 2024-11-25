from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from api.models import Lecture
from api.serializers import LectureSerializer


class LectureCreate(generics.CreateAPIView):
    queryset = Lecture.objects.all()
    serializer_class = LectureSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        if (serializer.is_valid()):
            serializer.save()
        else:
            print(serializer.errors)

class LectureDelete(generics.DestroyAPIView):
    queryset = Lecture.objects.all()
    serializer_class = LectureSerializer
    permission_classes = [IsAuthenticated]

class LectureUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lecture.objects.all()
    serializer_class = LectureSerializer
    permission_classes = [IsAuthenticated]
