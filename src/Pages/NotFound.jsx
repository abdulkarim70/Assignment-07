const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-2 text-gray-700">Page Not Found</p>
      <p className="text-gray-500 mt-1">
        The page you are looking for doesn’t exist.
      </p>
    </div>
  );
};

export default NotFound;