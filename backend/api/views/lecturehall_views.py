from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny

from api.models import LectureHall
from api.serializers import LectureHallSerializer


class LectureHallCreate(generics.CreateAPIView):
    queryset = LectureHall.objects.all()
    serializer_class = LectureHallSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        if (serializer.is_valid()):
            serializer.save()
        else:
            print(serializer.errors)

class LectureHallDelete(generics.DestroyAPIView):
    queryset = LectureHall.objects.all()
    serializer_class = LectureHallSerializer
    permission_classes = [AllowAny]

class LectureHallUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = LectureHall.objects.all()
    serializer_class = LectureHallSerializer
    permission_classes = [IsAuthenticated]
