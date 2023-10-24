# Job.ly

## Project Overview

This project is a job portal application built using React for the frontend and Node.js for the backend. The application allows users to sign in, apply for jobs, and view their dashboard. Admin users can view all users, jobs, and categories.
Key Features

- User Authentication: Users can sign in to the application. The sign-in process is handled in frontend/src/pages/LogIn.js and the corresponding Redux action is defined in frontend/src/redux/actions/userAction.js.

- User Dashboard: After signing in, users are redirected to their dashboard. The redirection is handled in frontend/src/pages/LogIn.js.

- Job Application: Users can apply for jobs. The corresponding Redux action is defined in frontend/src/redux/actions/userAction.js.

- User Logout: Users can log out of the application. The logout process is initiated from the sidebar component (frontend/src/pages/global/Sidebar.js) and the corresponding Redux action is defined in frontend/src/redux/actions/userAction.js.

- Admin Dashboard: Admin users have access to a special dashboard where they can view all users, jobs, and categories. The admin dashboard is defined in frontend/src/pages/admin/DashUsers.js.

## Code Structure

The codebase is divided into frontend and backend sections. The frontend is built using React and Redux for state management. The backend is built using Node.js.

The frontend code is further divided into components, pages, and Redux actions and reducers. Components are reusable pieces of UI, pages correspond to different routes in the application, and Redux actions and reducers handle state management.

The backend code is divided into controllers and routes. Controllers handle business logic and routes define the API endpoints.

## Running the Project

To run the project, you need to have Node.js and npm installed. You can then install the project dependencies using npm install and start the application using npm start.

Please note that this is a high-level overview of the project. For detailed information about specific parts of the codebase, please refer to the comments in the code.

## Video Demo

Here is a video demo of the application:

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/J3DC5GCEh30?si=1S_bBoeBwRkc1Zcy" frameborder="0" allowfullscreen="true"> </iframe>
</figure>
