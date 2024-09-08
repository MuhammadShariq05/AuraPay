import { useNavigate } from "react-router-dom";

export const Appbar = ({ username }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="shadow-lg h-16 flex justify-between items-center px-6 bg-gray-800 text-white">
      {/* AuraPay Logo */}
      <div className="text-2xl font-bold">AuraPay</div>

      {/* User Greeting and Username */}
      <div className="flex-grow flex items-center justify-center space-x-4">
        <div className="text-lg">Hello,</div>
        <div className="text-xl font-semibold">{username}</div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
      >
        Logout
      </button>
    </div>
  );
};
