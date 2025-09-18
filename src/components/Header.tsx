import React from 'react';
import { useAuth } from './AuthContext';
import { Shield, User, LogOut, Bell, Settings } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const { user, logout, isAuthenticated } = useAuth();

  const handleLogout = () => {
    logout();
    onNavigate('login');
  };

  if (!isAuthenticated) {
    return null; // Don't show header on auth pages
  }

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', roles: ['student', 'admin'] },
    { id: 'learn', label: 'Learn', roles: ['student', 'admin'] },
    { id: 'emergency-plan', label: 'Emergency Plan', roles: ['student', 'admin'] },
    { id: 'alerts', label: 'Alerts', roles: ['admin'] },
  ];

  const visibleNavItems = navigationItems.filter(item => 
    !user || item.roles.includes(user.role)
  );

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SafeGuard School</h1>
                <p className="text-xs text-gray-500">Emergency Preparedness System</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {visibleNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-blue-100 text-blue-700 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </button>

            {/* User Profile */}
            <div className="flex items-center space-x-3 bg-gray-50 rounded-lg px-3 py-2">
              <div className="bg-blue-600 rounded-full p-1.5">
                <User className="h-4 w-4 text-white" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-500 capitalize">
                  {user?.role} {user?.grade && `• ${user.grade}`}
                </p>
              </div>
            </div>

            {/* Settings */}
            <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <Settings className="h-5 w-5" />
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 rounded-lg transition-all duration-200"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:block text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden border-t border-gray-200 pt-4 pb-2">
          <div className="flex space-x-1 overflow-x-auto">
            {visibleNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-blue-100 text-blue-700 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;