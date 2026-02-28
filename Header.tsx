import React from 'react';
import { ViewState } from '../types';

interface HeaderProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  isLoggedIn: boolean;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, isLoggedIn }) => {
  const handleUploadClick = () => {
    if (isLoggedIn) {
      onNavigate('upload_document');
    } else {
      onNavigate('login');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <span className="material-symbols-outlined text-2xl">school</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 hidden md:block">UEL Study Hub</span>
        </div>

        {/* Search Bar - Hidden on mobile, visible on desktop */}
        <div className="flex-grow max-w-xl hidden md:block">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-400">search</span>
            </div>
            <input 
              type="text" 
              className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-full leading-5 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition-all" 
              placeholder="Tìm kiếm môn học, tài liệu, giảng viên..." 
            />
          </div>
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <nav className="hidden lg:flex items-center gap-6 mr-4">
             <button onClick={() => onNavigate('home')} className={`text-sm font-medium transition-colors ${currentView === 'home' ? 'text-primary-600' : 'text-slate-600 hover:text-slate-900'}`}>Trang chủ</button>
             <button onClick={() => onNavigate('documents_list')} className={`text-sm font-medium transition-colors ${currentView === 'documents_list' ? 'text-primary-600' : 'text-slate-600 hover:text-slate-900'}`}>Tài liệu</button>
             <button onClick={() => onNavigate('community')} className={`text-sm font-medium transition-colors ${currentView === 'community' ? 'text-primary-600' : 'text-slate-600 hover:text-slate-900'}`}>Cộng đồng</button>
          </nav>

          <button 
            onClick={handleUploadClick}
            className="hidden sm:flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-md shadow-blue-200 active:scale-95"
          >
            <span className="material-symbols-outlined text-lg">upload_file</span>
            <span className="hidden sm:inline">Đăng tài liệu</span>
          </button>

          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </button>
              <div 
                className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden cursor-pointer border border-slate-200 hover:ring-2 hover:ring-primary-500 transition-all"
                onClick={() => onNavigate('profile')}
              >
                <img src="https://ui-avatars.com/api/?name=Nguyen+Van+A&background=random" alt="User" className="w-full h-full object-cover" />
              </div>
            </div>
          ) : (
            <button 
              onClick={() => onNavigate('login')}
              className="text-slate-600 font-medium hover:text-primary-600 px-3 py-2"
            >
              Đăng nhập
            </button>
          )}
        </div>
      </div>
    </header>
  );
};