# TungstenChemistry

Welcome to TungstenChemistry, a platform designed to for Mr.Poot

## Project Plan: TungstenChem - Chemistry Learning & Competition Platform

### Key Features:

#### Student Features:
- **Puzzle Solving**: Students can solve chemistry puzzles categorized into calculation/numerical type and explanation type, earning a "puzzle rating" upon completion.
- **Head-to-Head Competitions**: Students can compete with peers from different chemistry levels (e.g., Chemistry in the Community, Chemistry 1, Honors Chemistry, AP Chemistry) to improve their "chem rating".
- **Lessons**: Access to lessons with short videos provided by the teacher, followed by questions for reinforcement.

#### Teacher Features:
- **Progress Monitoring**: Teachers can monitor student progress, including puzzle ratings, lesson completion, and chem ratings.
- **Prompt Creation**: Teachers can create prompts during class sessions, enter them into the program, and view students' responses in real-time.
- **Live Competitions**: Teachers can facilitate live competitions in class, projecting students' answers for all to see, with winners earning a "tungsten" and improving their chem rating.

### Technical Implementation:

#### Frontend:
- **HTML5, CSS3, JavaScript (React.js)**: For building the user interface with interactive components for students and teachers.
- **Websockets**: To facilitate real-time communication for live competitions and prompt responses.

#### Backend:
- **Node.js, Express.js**: For building the server-side logic and API endpoints.
- **MongoDB**: For storing user data, puzzle records, lesson progress, and chem ratings.
- **Socket.io**: For enabling real-time communication between server and clients during live competitions.

### User Authentication and Authorization:
- User authentication will be implemented using JWT (JSON Web Tokens) to securely authenticate users.
- Different levels of access will be assigned to teachers and students, allowing teachers to access monitoring and prompt creation features while students can access puzzles, lessons, and competitions.

### Database Schema:
- **Users**: Store user information including username, password hash, email, and role (teacher/student)
- **Puzzles**: Store puzzle questions, answers, types (calculation/explanation), and associated puzzle ratings
- **Lessons**: Store lesson information including videos, follow-up questions, and completion status.
- **Competitions**: Store competition details including participants, questions, answers, and results.

## Contact

For any inquiries or feedback, please contact:
- Rehan Shah: [rehanfshah@gmail.com](mailto:rehanfshah@gmail.com)
- Chien Leon LLC: [chienleonllc@gmail.com](mailto:chienleonllc@gmail.com)

