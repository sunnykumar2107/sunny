import React from 'react';
import { useAuth } from '../components/AuthContext';
import { BookOpen, Siren as Fire, Zap, Droplets, Heart, Shield, Clock, Trophy, ChevronRight, Play } from 'lucide-react';

interface LearnPageProps {
  onNavigate: (page: string, lessonId?: string) => void;
}

const LearnPage: React.FC<LearnPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();

  const learningModules = [
    {
      id: 'fire-safety',
      title: 'Fire Safety',
      description: 'Learn how to prevent fires and respond safely during fire emergencies',
      icon: Fire,
      color: 'from-red-500 to-orange-600',
      progress: 85,
      lessons: 8,
      duration: '45 min',
      difficulty: 'Beginner'
    },
    {
      id: 'earthquake-response',
      title: 'Earthquake Response',
      description: 'Understand earthquake safety procedures and protective actions',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      progress: 65,
      lessons: 6,
      duration: '35 min',
      difficulty: 'Intermediate'
    },
    {
      id: 'flood-preparedness',
      title: 'Flood Preparedness',
      description: 'Prepare for and respond to flood emergencies effectively',
      icon: Droplets,
      color: 'from-blue-500 to-cyan-600',
      progress: 40,
      lessons: 7,
      duration: '40 min',
      difficulty: 'Beginner'
    },
    {
      id: 'medical-emergencies',
      title: 'Medical Emergencies',
      description: 'Basic first aid and medical emergency response skills',
      icon: Heart,
      color: 'from-green-500 to-emerald-600',
      progress: 20,
      lessons: 10,
      duration: '60 min',
      difficulty: 'Advanced'
    }
  ];

  const achievements = [
    { title: 'Fire Safety Expert', earned: true, icon: Fire },
    { title: 'Quick Responder', earned: true, icon: Zap },
    { title: 'Safety Champion', earned: false, icon: Shield },
    { title: 'First Aid Hero', earned: false, icon: Heart }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Emergency Preparedness Learning
        </h1>
        <p className="text-gray-600">
          Master essential skills to stay safe during emergencies
        </p>
      </div>

      {/* Progress Overview */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 mb-8 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold mb-1">Your Learning Progress</h2>
            <p className="text-blue-100">Keep up the great work, {user?.name}!</p>
          </div>
          <div className="bg-white/20 rounded-full p-3">
            <Trophy className="h-8 w-8" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">73%</div>
            <div className="text-sm text-blue-100">Overall Progress</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">8</div>
            <div className="text-sm text-blue-100">Modules Completed</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">2.5h</div>
            <div className="text-sm text-blue-100">Time This Week</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Learning Modules */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <BookOpen className="h-6 w-6 mr-2 text-blue-600" />
            Learning Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningModules.map((module) => {
              const Icon = module.icon;
              return (
                <div
                  key={module.id}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden group cursor-pointer"
                  onClick={() => onNavigate('lesson', module.id)}
                >
                  <div className={`bg-gradient-to-r ${module.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="h-8 w-8" />
                      <div className="bg-white/20 rounded-full px-3 py-1">
                        <span className="text-sm font-medium">{module.difficulty}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                    <p className="text-sm opacity-90">{module.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-1" />
                          {module.lessons} lessons
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {module.duration}
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm text-gray-600">{module.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r ${module.color} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${module.progress}%` }}
                        />
                      </div>
                    </div>
                    
                    <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                      <Play className="h-4 w-4 mr-2" />
                      {module.progress > 0 ? 'Continue Learning' : 'Start Module'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Achievements */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
              Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-3 rounded-lg ${
                      achievement.earned
                        ? 'bg-yellow-50 border border-yellow-200'
                        : 'bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <div
                      className={`rounded-full p-2 ${
                        achievement.earned
                          ? 'bg-yellow-100 text-yellow-600'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-medium ${
                          achievement.earned ? 'text-gray-900' : 'text-gray-500'
                        }`}
                      >
                        {achievement.title}
                      </p>
                    </div>
                    {achievement.earned && (
                      <div className="text-yellow-600">
                        <Trophy className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Safety Tip of the Day
            </h3>
            <p className="text-green-800 mb-4">
              Always have an emergency kit ready with water, non-perishable food, flashlight, and first aid supplies.
            </p>
            <div className="bg-green-100 rounded-lg p-3">
              <p className="text-sm text-green-700 font-medium">
                💡 Remember: One gallon of water per person per day for at least 3 days!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnPage;