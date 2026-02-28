import React from 'react';
import { ViewState } from '../types';

interface LoginProps {
  onLogin: () => void;
  onNavigate: (view: ViewState) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin, onNavigate }) => {
  return (
    <div className="min-h-screen flex w-full bg-white">
      {/* Left Side Image */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary-600/90 mix-blend-multiply z-10"></div>
        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" className="absolute inset-0 w-full h-full object-cover" alt="Campus"/>
        <div className="relative z-20 p-12 text-white max-w-lg">
           <div className="mb-6 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
               <span className="material-symbols-outlined text-4xl">school</span>
           </div>
           <h1 className="text-5xl font-black mb-6 tracking-tight">Chào mừng bạn trở lại!</h1>
           <p className="text-lg text-blue-100 leading-relaxed">Kết nối với cộng đồng sinh viên UEL, chia sẻ tài liệu và cùng nhau chinh phục những cột mốc học tập mới.</p>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-slate-900">Đăng nhập</h2>
            <p className="mt-2 text-sm text-slate-500">Nhập thông tin tài khoản của bạn</p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
             <div className="space-y-4">
                <div>
                   <label className="block text-sm font-semibold text-slate-700 mb-1">Email sinh viên</label>
                   <input type="email" placeholder="mssv@st.uel.edu.vn" className="block w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
                </div>
                <div>
                   <label className="block text-sm font-semibold text-slate-700 mb-1">Mật khẩu</label>
                   <input type="password" placeholder="••••••••" className="block w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
                </div>
             </div>

             <div className="flex items-center justify-between">
                <label className="flex items-center">
                   <input type="checkbox" className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
                   <span className="ml-2 block text-sm text-slate-700">Ghi nhớ</span>
                </label>
                <button type="button" onClick={() => onNavigate('forgot_password')} className="text-sm font-medium text-primary-600 hover:text-primary-500">Quên mật khẩu?</button>
             </div>

             <button type="submit" className="w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-lg shadow-primary-500/30 transition-all transform hover:-translate-y-0.5">
               Đăng nhập
             </button>
             
             <div className="mt-6">
                <div className="relative">
                   <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                   <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">Hoặc tiếp tục với</span></div>
                </div>
                <button type="button" className="mt-6 w-full flex justify-center items-center gap-3 py-3 px-4 rounded-xl border border-slate-300 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                   <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5" alt="Google"/>
                   Đăng nhập với Google
                </button>
             </div>
          </form>
          
          <p className="text-center text-sm text-slate-600">
             Chưa có tài khoản? <button onClick={() => onNavigate('register')} className="font-bold text-primary-600 hover:text-primary-500">Đăng ký ngay</button>
          </p>
        </div>
      </div>
    </div>
  );
};