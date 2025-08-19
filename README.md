📚 BookWise
BookWise is a full-featured book review and management platform built with the MERN stack (MongoDB, Express, React, Node.js). Users can browse books, write detailed reviews with star ratings, and manage their list of favorites. Admins have additional privileges to manage book listings and user roles.

✨ Key Features
🔐 Authentication
Secure user registration and login

JWT-based authentication

Passwords hashed using Bcrypt

📚 Book Listings & Reviews
Search and browse books

Submit reviews with star ratings

Read community reviews and feedback

👤 User Profiles
Personalized profile pages

Manage favorite books

💬 Nested Commenting System
Replies on reviews using a threaded comment structure

Efficient deletion using Depth-First Search (DFS) logic

🛡️ Role-Based Access
Regular users and admins

Admin privileges include:

Add, edit, delete books

Manage user accounts and roles (except master admin)

🛠 Tech Stack
Frontend
React.js

Recoil for global state

Tailwind CSS

Shadcn UI components

React Hook Form

Tanstack Table

Lucide-react icons

Backend
Node.js

Express.js

MongoDB with Mongoose

Multer for file uploads

CORS support

JWT for auth

Bcrypt for password security

Other Tools
Axios (API requests)

Zod (schema validation)

React Router DOM (routing)

Cloudinary (for optional image uploads)

⚙️ Getting Started
📋 Prerequisites
Node.js

MongoDB (local or MongoDB Atlas URL)

🔧 Setup Environment
Rename .env.example to .env in both the frontend and backend folders

Add the required variables:

Backend .env:
env
Copy
Edit
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
PORT=5000
🔁 Not using Cloudinary? Replace cloudStorage with diskStorage in /backend/middleware/upload.js.

Frontend .env:
env
Copy
Edit
VITE_API_URL=http://localhost:5000
🧪 Install Dependencies
bash
Copy
Edit
git clone https://github.com/harsha0502/bookwise.git
cd bookwise
bash
Copy
Edit
cd backend
npm install

cd ../frontend
npm install
🚀 Run the App
Start Backend
bash
Copy
Edit
cd backend
node index.js
Start Frontend
bash
Copy
Edit
cd ../frontend
npm run dev
Open your browser at http://localhost:5173

