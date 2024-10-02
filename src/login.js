import React, { useState } from 'react';

const LoginPage = () => {
  const [loginType, setLoginType] = useState('Admin');

  const handleLoginTypeChange = (type) => {
    setLoginType(type);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Plac Login</h2>
        {/* Toggle between login types */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 rounded-l-lg ${
              loginType === 'Admin' ? 'bg-gray-200' : 'bg-white'
            } border border-gray-300`}
            onClick={() => handleLoginTypeChange('Admin')}
          >
            Admin
          </button>
          <button
            className={`px-4 py-2 ${
              loginType === 'Student' ? 'bg-gray-200' : 'bg-white'
            } border border-gray-300`}
            onClick={() => handleLoginTypeChange('Student')}
          >
            Student
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg ${
              loginType === 'Employer' ? 'bg-gray-200' : 'bg-white'
            } border border-gray-300`}
            onClick={() => handleLoginTypeChange('Employer')}
          >
            Employer
          </button>
        </div>

        {/* Login form */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
          >
            Login as {loginType}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;