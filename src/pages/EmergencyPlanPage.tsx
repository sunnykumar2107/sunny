import React from 'react';
import { useAuth } from '../components/AuthContext';
import { 
  MapPin, 
  Phone, 
  AlertTriangle, 
  Users, 
  Clock,
  Shield,
  Navigation,
  Building,
  Heart,
  Zap
} from 'lucide-react';

const EmergencyPlanPage: React.FC = () => {
  const { user } = useAuth();

  const emergencyContacts = [
    {
      title: 'Emergency Services',
      number: '911',
      description: 'Fire, Police, Medical Emergency',
      color: 'bg-red-600',
      icon: AlertTriangle
    },
    {
      title: 'School Main Office',
      number: '(555) 123-4567',
      description: 'SafeGuard Elementary School',
      color: 'bg-blue-600',
      icon: Building
    },
    {
      title: 'School Nurse',
      number: '(555) 123-4568',
      description: 'Medical assistance on campus',
      color: 'bg-green-600',
      icon: Heart
    },
    {
      title: 'Facilities Management',
      number: '(555) 123-4569',
      description: 'Building emergencies & utilities',
      color: 'bg-orange-600',
      icon: Zap
    }
  ];

  const evacuationProcedures = [
    {
      step: 1,
      title: 'Stay Calm',
      description: 'Listen carefully to instructions from teachers and staff',
      icon: Shield
    },
    {
      step: 2,
      title: 'Follow Your Teacher',
      description: 'Walk quickly but do not run. Stay in line with your class',
      icon: Users
    },
    {
      step: 3,
      title: 'Use Designated Route',
      description: 'Follow the evacuation route posted in your classroom',
      icon: Navigation
    },
    {
      step: 4,
      title: 'Assembly Point',
      description: 'Meet at the designated assembly area on the playground',
      icon: MapPin
    }
  ];

  const assemblyPoints = [
    {
      name: 'Primary Assembly Point',
      location: 'Main Playground (East Side)',
      description: 'For classrooms in Building A & B',
      capacity: '300 students'
    },
    {
      name: 'Secondary Assembly Point',
      location: 'Sports Field (North Side)',
      description: 'For classrooms in Building C & Gymnasium',
      capacity: '200 students'
    },
    {
      name: 'Alternative Assembly Point',
      location: 'Parking Lot (West Side)',
      description: 'If primary points are inaccessible',
      capacity: '500 students'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Emergency Response Plan
        </h1>
        <p className="text-gray-600">
          Essential information and procedures for emergency situations
        </p>
      </div>

      {/* Emergency Alert Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-6 mb-8 text-white">
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 rounded-full p-3">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1">In Case of Emergency</h2>
            <p className="text-red-100 mb-3">
              Call 911 immediately for life-threatening emergencies
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Available 24/7
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                Free from any phone
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Emergency Contacts */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Phone className="h-6 w-6 mr-2 text-blue-600" />
              Emergency Contacts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {emergencyContacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`${contact.color} rounded-full p-2`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {contact.title}
                        </h3>
                        <p className="text-2xl font-bold text-gray-900 mb-1">
                          {contact.number}
                        </p>
                        <p className="text-sm text-gray-600">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Evacuation Procedures */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Navigation className="h-6 w-6 mr-2 text-green-600" />
              Evacuation Procedures
            </h2>
            <div className="space-y-4">
              {evacuationProcedures.map((procedure, index) => {
                const Icon = procedure.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">
                        {procedure.step}
                      </span>
                    </div>
                    <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                      <Icon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {procedure.title}
                      </h3>
                      <p className="text-gray-600">{procedure.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Evacuation Map */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <MapPin className="h-6 w-6 mr-2 text-purple-600" />
              School Evacuation Map
            </h2>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="bg-white rounded-lg p-6 inline-block shadow-sm">
                <MapPin className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Interactive Map Coming Soon
                </h3>
                <p className="text-gray-600 mb-4">
                  Detailed evacuation routes and assembly points
                </p>
                <div className="text-sm text-gray-500">
                  For now, refer to the evacuation route posted in your classroom
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Assembly Points */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-blue-600" />
              Assembly Points
            </h3>
            <div className="space-y-4">
              {assemblyPoints.map((point, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <h4 className="font-medium text-gray-900 mb-2">
                    {point.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Location:</strong> {point.location}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    {point.description}
                  </p>
                  <div className="text-xs text-gray-500">
                    Capacity: {point.capacity}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Reference */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Quick Reference
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-blue-800">Emergency:</span>
                <span className="font-bold text-blue-900">911</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-800">School Office:</span>
                <span className="font-bold text-blue-900">(555) 123-4567</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-800">Your Grade:</span>
                <span className="font-bold text-blue-900">
                  {user?.grade || 'N/A'}
                </span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-100 rounded-lg">
              <p className="text-xs text-blue-800">
                <strong>Remember:</strong> Stay calm, follow instructions, and help others when safe to do so.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPlanPage;