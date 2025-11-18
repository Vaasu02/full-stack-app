import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Welcome to Your App!</h1>
      <p className="text-gray-700 text-center max-w-xl mb-4">
        This is the Home page. Navigate to "Users" to see the users fetched from MongoDB.
      </p>
      <Link
        to="/users"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        Go to Users
      </Link>
    </div>
  );
}
