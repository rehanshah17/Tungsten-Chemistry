# TungstenChemistry

Welcome to TungstenChemistry, a platform designed for Mr. Poot's chemistry students and teachers to facilitate learning, competition, and progress monitoring in chemistry.

## Project Plan: TungstenChem - Chemistry Learning & Competition Platform

### Key Features:

#### Student Features:
- **Puzzle Solving**: Students can solve chemistry puzzles, earning a "Atomic #" rating upon completion.
- **Lessons**: Access to lessons with short videos provided by the teacher, followed by questions for reinforcement.

#### Teacher Features:
- **Progress Monitoring**: Teachers can monitor student progress, including puzzle ratings and puzzle submitions.
- **Prompt Creation**: Teachers can create prompts during class sessions, enter them into the program, and view students' responses in real-time.
- **Live Competitions**: Teachers can facilitate live competitions in class, projecting students' answers for all to see, with winners improving their chem rating.

### Technical Implementation:

#### Frontend:
- **HTML5, CSS3, JavaScript (React.js)**: For building the user interface with interactive components for students and teachers.
- **CSS Animations**: To enhance the user experience with visual feedback.
- **React Videoplayer**: Creates a youtube miniplayer screen when Mr.Poot attaches a youtube link to a post on the lessons page.

#### Backend:
- **Firebase**: For authentication, Firestore database, and real-time updates.
- **Node.js, Express.js**: For building the server-side logic and API endpoints.
- **Firestore**: For storing user data, puzzle records, lesson progress, and chem ratings.

### User Authentication and Authorization:
- **Google Authentication (Firebase)**: To securely authenticate users.
- **Role-Based Access Control**: Different levels of access for teachers and students, allowing teachers to access monitoring and prompt creation features while students can access puzzles, lessons, and competitions.

### Database Schema:
- **Users**: Store user information including username, email, and role (teacher/student).
- **Puzzles**: Store puzzle questions, answers, types, and associated puzzle ratings.
- **Responses**: Store student responses to puzzles, including correctness and graded status.
- **Posts**: Store all posts to the home page made by Mr. Poot.

## Contact

For any inquiries or feedback, please contact:
- Rehan Shah: [rehanfshah@gmail.com](mailto:rehanfshah@gmail.com)
- Leon Chien: [chienleonllc@gmail.com](mailto:chienleonllc@gmail.com)
