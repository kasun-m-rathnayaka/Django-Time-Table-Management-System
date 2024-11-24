from django.shortcuts import render, redirect, get_object_or_404
from .models import LeaveRequest, Lecturer
from django.contrib.auth.decorators import login_required
from django.core.exceptions import PermissionDenied


def request_leave(request):
    if request.method == 'POST':
        lecturer_id = request.POST['lecturer_id']
        leave_date = request.POST['leave_date']
        leave_reason = request.POST['leave_reason']
        
        lecturer = get_object_or_404(Lecturer, pk=lecturer_id)
        
        # Create leave request
        leave_request = LeaveRequest.objects.create(
            lecturer=lecturer,
            leave_date=leave_date,
            leave_reason=leave_reason,
        )

        # Find an available substitute
        substitute = Lecturer.objects.filter(is_available=True).exclude(id=lecturer_id).first()
        if substitute:
            leave_request.substitute_lecturer = substitute
            substitute.is_available = False  # Update availability
            substitute.save()
        
        leave_request.save()
        return redirect('leave_request_success')
    else:
        lecturers = Lecturer.objects.all()
        return render(request, 'request_leave.html', {'lecturers': lecturers})
