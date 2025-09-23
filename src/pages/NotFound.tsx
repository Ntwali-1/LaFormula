import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center  ">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <button className="mb-6 px-6 py-3 font-semibold text-white bg-blue-950 rounded-md hover:bg-slate-500 transition-colors duration-750">
            <a href="/" className="text-blue-500 hover:underline hover:text-blue-700">
          Return to Home
        </a>
        </button>
      
      </div>
    </div>
  );
};

export default NotFound;
