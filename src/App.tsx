import React, { useState } from 'react';
import { AuthProvider, useAuth } from './components/AuthContext';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import LearnPage from './pages/LearnPage';
import EmergencyPlanPage from './pages/EmergencyPlanPage';
import AlertsPage from './pages/AlertsPage';
import LessonPage from './pages/LessonPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [currentPage, setCurrentPage] = useState(() => {
    return isAuthenticated ? 'dashboard' : 'login';
  });
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);

  const handleNavigate = (page: string, lessonId?: string) => {
    setCurrentPage(page);
    if (lessonId) {
      setSelectedLesson(lessonId);
    }
  };

  // Show authentication pages when not authenticated
  if (!isAuthenticated) {
    return (
      <>
        {currentPage === 'login' && <LoginPage onNavigate={handleNavigate} />}
        {currentPage === 'register' && <RegisterPage onNavigate={handleNavigate} />}
      </>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'learn':
        return <LearnPage onNavigate={handleNavigate} />;
      case 'emergency-plan':
        return <EmergencyPlanPage />;
      case 'alerts':
        return <AlertsPage />;
      case 'lesson':
        return <LessonPage lessonId={selectedLesson} onBack={() => setCurrentPage('learn')} />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;