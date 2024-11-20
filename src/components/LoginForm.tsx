import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', formData);
  };

  const inputClasses = `block w-full pl-10 pr-3 py-2.5 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300 bg-[#131428] border-gray-800 text-white placeholder-gray-500`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Mail className={`h-5 w-5 text-gray-500`} />
        </div>
        <input
          type="email"
          required
          placeholder="Email address"
          className={inputClasses}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Lock className={`h-5 w-5 text-gray-500`} />
        </div>
        <input
          type="password"
          required
          placeholder="Password"
          className={inputClasses}
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="h-4 w-4 text-indigo-500 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="remember" className={`ml-2 block text-sm text-gray-400`}>
            Remember me
          </label>
        </div>
        <button
          type="button"
          className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Forgot password?
        </button>
      </div>

      <button
        type="submit"
        className={`w-full py-2.5 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors bg-indigo-500 hover:bg-indigo-600 text-white`}
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;