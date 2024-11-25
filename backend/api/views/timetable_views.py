from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from api.models import timetable
from api.serializers import timetableSerializer


class TimeTableCreate(generics.CreateAPIView):
    queryset = timetable.objects.all()
    serializer_class = timetableSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        if (serializer.is_valid()):
            serializer.save()
        else:
            print(serializer.errors)

class TimeTableDelete(generics.DestroyAPIView):
    queryset = timetable.objects.all()
    serializer_class = timetableSerializer
    permission_classes = [IsAuthenticated]

class TimeTableUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = timetable.objects.all()
    serializer_class = timetableSerializer
    permission_classes = [IsAuthenticated]