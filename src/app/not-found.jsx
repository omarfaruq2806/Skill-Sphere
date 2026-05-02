import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      
      <div className="text-center">
        
        {/* 404 */}
        <h1 className="text-7xl font-extrabold text-purple-600">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-2 max-w-md mx-auto">
          Sorry, the page you are looking for doesn’t exist.
        </p>

        {/* Button */}
        <Link href="/">
          <button className="mt-6 px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
            Go Back Home
          </button>
        </Link>

      </div>
    </div>
  );
}