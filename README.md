# Course Management System

A comprehensive course management system built with Django and React, designed to handle course scheduling, instructor management, and student enrollment.

## Features

- **Course Management**
  - Create, update, and delete courses
  - Assign instructors to courses
  - Set course schedules and room assignments
  - Manage course capacity and prerequisites

- **Admin Portal**
  - Admin profiles and availability management
  - Course assignment tracking
  - Schedule overview and conflicts detection

- **Course Management**
  - Hall capacity and features tracking
  - Schedule visualization
  - Conflict prevention system

- **Student Enrollment**
  - Course registration system
  - Schedule viewing
  - Enrollment status tracking

## Technology Stack

- **Backend**
  - Django
  - Django REST Framework
  - SQL lite
  - Python 3.9

- **Frontend**
  - React
  - React Router
  - Axios
  - Tailwind CSS

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/course-management.git
cd course-management
```

2. Set up the virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```

3. Install backend dependencies
```bash
pip install -r requirements.txt
```

4. Install frontend dependencies
```bash
cd frontend
npm install
```

5. Configure the database
```bash
python manage.py migrate
```

6. Create a superuser
```bash
python manage.py createsuperuser
```

## Running the Application

1. Start the Django development server
```bash
python manage.py runserver
```

2. Start the React development server
```bash
cd frontend
npm start
```

The application will be available at:
- Backend: http://localhost:8000
- Frontend: http://localhost:3000
- Admin Interface: http://localhost:8000/admin

## Project Structure

```
course-management/
│
├── backend/
│   ├── courses/              # Course management app
│   ├── instructors/          # Instructor management app
│   ├── halls/               # Room management app
│   ├── enrollment/          # Student enrollment app
│   └── core/                # Core functionality and settings
│
└── frontend/
    ├── src/
    │   ├── components/      # React components
    │   ├── pages/           # Page components
    │   ├── services/        # API services
    │   └── utils/           # Utility functions
    └── public/              # Static files
```

## API Documentation

The API documentation is available at `/api/docs/` when running the development server. It includes detailed information about all available endpoints and their usage.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository or contact the development team.
