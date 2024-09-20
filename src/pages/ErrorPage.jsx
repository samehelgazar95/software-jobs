export default function ErrorPage({ children }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <div className="text-center">
        {children ? (
          children
        ) : (
          <p className="text-gray-500">
            You can go back to the homepage or try another link.
          </p>
        )}
      </div>
      <a
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
      >
        Go Home
      </a>
    </div>
  );
}
