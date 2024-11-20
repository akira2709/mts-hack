import React, { useState } from 'react';
import { User, Mail, Lock, KeyRound } from 'lucide-react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup:', formData);
  };

  const inputClasses = `block w-full pl-10 pr-3 py-2.5 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300 bg-[#131428] border-gray-800 text-white placeholder-gray-500`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <User className={`h-5 w-5 text-gray-500`} />
        </div>
        <input
          type="text"
          required
          placeholder="Full name"
          className={inputClasses}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

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

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <KeyRound className={`h-5 w-5 text-gray-500`} />
        </div>
        <input
          type="password"
          required
          placeholder="Confirm password"
          className={inputClasses}
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="terms"
          required
          className="h-4 w-4 text-indigo-500 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label htmlFor="terms" className={`ml-2 block text-sm text-gray-400`}>
          I agree to the{` `}
          <a href="#" className="text-indigo-400 hover:text-indigo-300">
            Terms and Conditions
          </a>
        </label>
      </div>

      <button
        type="submit"
        className={`w-full py-2.5 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors bg-indigo-500 hover:bg-indigo-600 text-white`}
      >
        Create Account
      </button>
    </form>
  );
};

export default SignupForm;
