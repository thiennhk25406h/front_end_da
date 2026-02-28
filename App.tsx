import React, { useState } from 'react';
import { ViewState } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { DocumentsList } from './pages/DocumentsList';
import { SubjectDetail } from './pages/SubjectDetail';
import { DocumentDetail } from './pages/DocumentDetail';
import { Community } from './pages/Community';
import { PostDetail } from './pages/PostDetail';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ForgotPassword } from './pages/ForgotPassword';
import { UploadDocument } from './pages/UploadDocument';
import { Profile } from './pages/Profile';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavigate = (view: ViewState) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(view);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    handleNavigate('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    handleNavigate('home');
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'documents_list':
        return <DocumentsList onNavigate={handleNavigate} />;
      case 'subject':
        return <SubjectDetail onNavigate={handleNavigate} />;
      case 'document':
        return <DocumentDetail onNavigate={handleNavigate} isLoggedIn={isLoggedIn} />;
      case 'community':
        return <Community onNavigate={handleNavigate} />;
      case 'post_detail':
        return <PostDetail onNavigate={handleNavigate} />;
      case 'login':
        return <Login onLogin={handleLogin} onNavigate={handleNavigate} />;
      case 'register':
        return <Register onNavigate={handleNavigate} />;
      case 'forgot_password':
        return <ForgotPassword onNavigate={handleNavigate} />;
      case 'upload_document':
        return <UploadDocument onNavigate={handleNavigate} />;
      case 'profile':
        return <Profile onNavigate={handleNavigate} onLogout={handleLogout} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="font-sans text-slate-900 bg-slate-50 min-h-screen flex flex-col">
      {currentView !== 'login' && currentView !== 'register' && currentView !== 'forgot_password' && (
        <Header 
          currentView={currentView} 
          onNavigate={handleNavigate} 
          isLoggedIn={isLoggedIn} 
        />
      )}
      
      <main className="flex-grow">
        {renderView()}
      </main>

      {currentView !== 'login' && currentView !== 'register' && currentView !== 'forgot_password' && <Footer />}
    </div>
  );
}

export default App;