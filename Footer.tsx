import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
             <span className="material-symbols-outlined text-xl">school</span>
           </div>
           <p className="text-sm font-medium text-slate-500">© 2024 UEL Study Hub.</p>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-slate-500">
           <a href="#" className="hover:text-primary-600 transition-colors">Về chúng tôi</a>
           <a href="#" className="hover:text-primary-600 transition-colors">Điều khoản</a>
           <a href="#" className="hover:text-primary-600 transition-colors">Bảo mật</a>
           <a href="#" className="hover:text-primary-600 transition-colors">Liên hệ</a>
        </div>
      </div>
    </footer>
  );
};