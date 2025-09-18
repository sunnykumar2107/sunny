import React from 'react';
import { useAuth } from '../components/AuthContext';
import { 
  AlertTriangle, 
  Clock, 
  Trophy, 
  Users, 
  BookOpen, 
  Shield,
  Calendar,
  MapPin,
  Phone,
  TrendingUp
} from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const { user } = useAuth();

  const quickActions = [
    {
      title: 'Start Learning',
      description: 'Continue your emergency preparedness training',
      icon: BookOpen,
      action: () => onNavigate('learn'),
      color: 'bg-green-600 hover:bg-green-700',
    },
    {
      title: 'View Emergency Plan',
      description: 'Access evacuation maps and contacts',
      icon: MapPin,
      action: () => onNavigate('emergency-plan'),
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      title: 'Emergency Contacts',
      description: 'Quick access to important numbers',
      icon: Phone,
      action: () => onNavigate('emergency-plan'),
      color: 'bg-red-600 hover:bg-red-700',
    },
  ];

  const recentAlerts = [
    {
      id: 1,
      type: 'drill',
      title: 'Fire Drill Scheduled',
      message: 'Next fire drill scheduled for tomorrow at 10:30 AM',
      time: '2 hours ago',
      severity: 'info'
    },
    {
      id: 2,
      type: 'weather',
      title: 'Weather Advisory',
      message: 'Possible thunderstorms this afternoon. Stay alert.',
      time: '4 hours ago',
      severity: 'warning'
    },
  ];

  const learningProgress = [
    { module: 'Fire Safety', progress: 85, color: 'bg-red-500' },
    { module: 'Earthquake Response', progress: 65, color: 'bg-yellow-500' },
    { module: 'Flood Preparedness', progress: 40, color: 'bg-blue-500' },
    { module: 'Medical Emergencies', progress: 20, color: 'bg-green-500' },
  ];

  const upcomingEvents = [
    {
      title: 'Fire Drill Practice',
      date: 'Tomorrow',
      time: '10:30 AM',
      type: 'drill'
    },
    {
      title: 'Emergency Preparedness Week',
      date: 'Next Monday',
      time: 'All Day',
      type: 'event'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user?.name}! 👋
        </h1>
        <p className="text-gray-600">
          {user?.role === 'admin' 
            ? 'Manage your school\'s emergency preparedness system'
            : 'Continue your emergency preparedness learning journey'
          }
        </p>
      </div>

      {/* Active Alerts */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 mb-8">
        <div className="flex items-start space-x-4">
          <div className="bg-red-100 rounded-full p-2 animate-pulse">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-red-900 mb-1">Fire Drill Tomorrow</h3>
            <p className="text-red-700 mb-3">
              Scheduled fire evacuation drill at 10:30 AM. Please review evacuation routes.
            </p>
            <button
              onClick={() => onNavigate('emergency-plan')}
              className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <MapPin className="h-4 w-4 mr-2" />
              View Evacuation Map
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 rounded-full p-3">
              <Trophy className="h-6 w-6 text-green-600" />
            </div>
            <TrendingUp className="h-5 w-5 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">73%</h3>
          <p className="text-gray-600 text-sm">Overall Progress</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 rounded-full p-3">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <TrendingUp className="h-5 w-5 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">8</h3>
          <p className="text-gray-600 text-sm">Modules Completed</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-yellow-100 rounded-full p-3">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <TrendingUp className="h-5 w-5 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">2.5h</h3>
          <p className="text-gray-600 text-sm">Time This Week</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 rounded-full p-3">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <TrendingUp className="h-5 w-5 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">245</h3>
          <p className="text-gray-600 text-sm">Students Active</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-blue-600" />
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <button
                    key={index}
                    onClick={action.action}
                    className={`${action.color} text-white p-6 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-lg group`}
                  >
                    <Icon className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-lg mb-2">{action.title}</h3>
                    <p className="text-sm opacity-90">{action.description}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Learning Progress */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
              Learning Progress
            </h2>
            <div className="space-y-4">
              {learningProgress.map((module, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">{module.module}</span>
                    <span className="text-sm text-gray-600">{module.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`${module.color} h-3 rounded-full transition-all duration-500`}
                      style={{ width: `${module.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => onNavigate('learn')}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Continue Learning
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Alerts */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
              Recent Alerts
            </h2>
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg border-l-4 ${
                    alert.severity === 'warning'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-blue-500 bg-blue-50'
                  }`}
                >
                  <h4 className="font-medium text-gray-900 mb-1">{alert.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{alert.message}</p>
                  <p className="text-xs text-gray-500">{alert.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-purple-600" />
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="bg-purple-100 rounded-full p-2 mt-1">
                    <Calendar className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;