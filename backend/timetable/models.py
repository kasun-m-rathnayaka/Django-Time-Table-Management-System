from django.db import models
class Lecturer(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=50)  # e.g., Lecturer, Assistant Lecturer, etc.
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class LeaveRequest(models.Model):
    lecturer = models.ForeignKey(Lecturer, on_delete=models.CASCADE)
    leave_date = models.DateField()
    leave_reason = models.TextField()
    substitute_lecturer = models.ForeignKey(
        Lecturer, related_name="substitute", on_delete=models.SET_NULL, null=True, blank=True
    )

    def __str__(self):
        return f"Leave: {self.lecturer.name} on {self.leave_date}"
