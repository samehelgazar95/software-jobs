# Software Jobs - Job Portal

**Software Jobs** is a modern job portal focused on software-related roles. The platform provides a seamless experience for both job seekers (candidates) and recruiters, with tailored access to job postings, applications, and job management. The project leverages a robust tech stack including **React**, **Supabase**, and **Clerk** for authentication, and follows a clean, responsive UI.

## Features

### Candidate Features

- **Browse Jobs**: Access a wide range of software-related job listings.
- **Apply to Jobs**: Submit job applications directly from the platform.
- **Bookmark Jobs**: Save jobs for later and manage them from the saved jobs page.
- **Track Applications**: View and manage all job applications under 'My Applications.'

### Recruiter Features

- **Post Jobs**: Create job postings that candidates can apply to.
- **Manage Jobs**: View, edit, or delete posted jobs from the 'My Jobs' page.
- **View Applicants**: Review applicants for specific job postings.

### General Features

- **Authentication**: Secure sign-up and login using **Clerk**.
- **Responsive Design**: Optimized for all devices.
- **Supabase Integration**: Full-stack CRUD operations using **Supabase** for database management.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS for styling.
- **Backend**: Supabase (for database and backend operations).
- **Authentication**: Clerk for user management and role-based access.
- **Routing**: React Router for navigation.

## Installation and Setup

**Clone the repository, then Configure Environment Variables: Create a .env file and add your Supabase and Clerk credentials**:

```bash
git clone https://github.com/your-username/software-jobs.git

npm install

REACT_APP_SUPABASE_URL=your-supabase-url
REACT_APP_SUPABASE_KEY=your-supabase-key
REACT_APP_CLERK_FRONTEND_API=your-clerk-api

npm start
```

## Usage

### For Candidates

- **Sign Up/Login**: Use Clerk for secure authentication.
- **Job Search**: Use the job listing page to search for relevant software roles.
- **Apply**: Submit job applications directly on the platform.
- **Bookmark**: Save jobs for later viewing.
- **Track Applications**: Manage and track your job applications.

### For Recruiters

- **Post Jobs**: Add new job postings for candidates to view and apply.
- **Manage Jobs**: Edit or delete job postings from the "My Jobs" page.
- **View Applicants**: Review candidate applications for your posted jobs.

## Future Enhancements

- **Search and Filter Functionality**: Implement more advanced filters (location, salary, etc.) and job search by keywords.
- **Job Alerts**: Allow candidates to subscribe to alerts when new jobs matching their interests are posted.
- **Dashboard for Recruiters**: Provide detailed analytics for job performance, including applicant stats.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add feature'`).
5. Push the branch (`git push origin feature-branch`).
6. Open a pull request.

## Contact

For any inquiries or issues, please contact the project maintainer at selgazar95@gmail.com.
