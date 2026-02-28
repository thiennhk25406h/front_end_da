import React, { useState } from 'react';
import { ViewState } from '../types';

interface ForgotPasswordProps {
  onNavigate: (view: ViewState) => void;
}

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onNavigate }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex w-full bg-white">
      {/* Left Side Image */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary-600/90 mix-blend-multiply z-10"></div>
        <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" className="absolute inset-0 w-full h-full object-cover" alt="Study"/>
        <div className="relative z-20 p-12 text-white max-w-lg">
           <div className="mb-6 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
               <span className="material-symbols-outlined text-4xl">lock_reset</span>
           </div>
           <h1 className="text-5xl font-black mb-6 tracking-tight">Khôi phục mật khẩu</h1>
           <p className="text-lg text-blue-100 leading-relaxed">Đừng lo lắng, chúng tôi sẽ giúp bạn lấy lại quyền truy cập tài khoản chỉ trong vài bước đơn giản.</p>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
            {!isSubmitted ? (
                <>
                    <div className="text-center lg:text-left">
                        <button onClick={() => onNavigate('login')} className="flex items-center text-slate-500 hover:text-primary-600 mb-6 transition-colors">
                            <span className="material-symbols-outlined text-xl mr-1">arrow_back</span> Quay lại đăng nhập
                        </button>
                        <h2 className="text-3xl font-extrabold text-slate-900">Quên mật khẩu?</h2>
                        <p className="mt-2 text-sm text-slate-500">Nhập email sinh viên của bạn để nhận liên kết đặt lại mật khẩu.</p>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Email sinh viên</label>
                            <input type="email" placeholder="mssv@st.uel.edu.vn" className="block w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
                        </div>

                        <button type="submit" className="w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-lg shadow-primary-500/30 transition-all transform hover:-translate-y-0.5">
                            Gửi liên kết khôi phục
                        </button>
                    </form>
                </>
            ) : (
                <div className="text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 animate-[bounce_1s_ease-in-out]">
                        <span className="material-symbols-outlined text-4xl">mark_email_read</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Đã gửi email!</h2>
                    <p className="text-slate-500 mb-8">
                        Chúng tôi đã gửi hướng dẫn khôi phục mật khẩu đến email của bạn. Vui lòng kiểm tra hộp thư (bao gồm cả thư mục spam).
                    </p>
                    <button 
                        onClick={() => onNavigate('login')}
                        className="w-full bg-slate-100 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all"
                    >
                        Quay về trang đăng nhập
                    </button>
                    <button 
                        onClick={() => setIsSubmitted(false)}
                        className="mt-4 text-primary-600 text-sm font-semibold hover:underline"
                    >
                        Thử lại với email khác
                    </button>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};