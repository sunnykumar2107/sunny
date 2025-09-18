import React, { useState } from 'react';
import { useAuth } from '../components/AuthContext';
import { Shield, AlertTriangle, Eye, EyeOff, Mail, Lock } from 'lucide-react';

interface LoginPageProps {
  onNavigate: (page: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const success = await login(formData.email, formData.password);
      if (success) {
        onNavigate('dashboard');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (err) {
      setError('An error occurred during login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const demoCredentials = [
    { role: 'Student', email: 'student@safeguard.edu', password: 'student123' },
    { role: 'Admin/Teacher', email: 'admin@safeguard.edu', password: 'admin123' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-blue-200">Sign in to access SafeGuard School</p>
        </div>

        {/* Demo Credentials */}
        <div className="bg-blue-800/30 border border-blue-700 rounded-lg p-4 backdrop-blur-sm">
          <h3 className="text-blue-200 font-semibold mb-3 flex items-center">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Demo Credentials
          </h3>
          {demoCredentials.map((cred, index) => (
            <div key={index} className="mb-2 last:mb-0">
              <div className="text-blue-100 text-sm">
                <strong>{cred.role}:</strong> {cred.email} / {cred.password}
              </div>
            </div>
          ))}
        </div>

        {/* Login Form */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-2xl">
          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-400 rounded-lg text-red-100 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-300" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-300" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-blue-200 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-800 disabled:to-blue-900 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Signing In...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-blue-200">
              Don't have an account?{' '}
              <button
                onClick={() => onNavigate('register')}
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Sign up here
              </button>
            </p>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="text-center text-blue-200 text-sm">
          <p>In case of emergency, call: <strong className="text-white">911</strong></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;