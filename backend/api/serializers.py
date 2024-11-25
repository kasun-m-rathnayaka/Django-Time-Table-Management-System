from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note, LectureHall, Course, Lecture, timetable

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {"password": {"write_only": True, "required": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'title', 'content', 'author', 'created_at']
        extra_kwargs = {"author": {"read_only": True}}

class LectureHallSerializer(serializers.ModelSerializer):
    class Meta:
        model = LectureHall
        fields = ['id', 'name', 'capacity']
        extra_kwargs = {"capacity": {"required": True}}

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'name', 'code', 'lecturer', 'allocated_time']
        extra_kwargs = {"allocated_time": {"required": True}}

class LectureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lecture
        fields = ['id', 'name', 'position', 'allocated_time']
        extra_kwargs = {"allocated_time": {"required": True}}

class timetableSerializer(serializers.ModelSerializer):
    class Meta:
        model = timetable
        fields = ['id', 'course', 'lecture', 'lecture_hall', 'day', 'start_time', 'end_time']
        extra_kwargs = {"day": {"required": True}}