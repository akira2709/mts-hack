import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 bg-[#040517]`}>
      <div className="max-w-md w-full">
        <div className={`rounded-2xl shadow-xl overflow-hidden transition-colors duration-300 bg-[#0a0b1e] border border-gray-800`}>
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className={`text-3xl font-bold mb-2 transition-colors duration-300 text-white`}>
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h1>
              <p className={`transition-colors duration-300 text-white`}>
                {isLogin
                  ? 'Enter your credentials to access your account'
                  : 'Sign up to get started with our platform'}
              </p>
            </div>

            {isLogin ? <LoginForm /> : <SignupForm />}

            <div className="mt-6 text-center">
              <p className={`transition-colors duration-300 text-gray-400`}>
                {isLogin ? "Don't have an account?" : 'Already have an account?'}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                >
                  {isLogin ? 'Sign up' : 'Log in'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;