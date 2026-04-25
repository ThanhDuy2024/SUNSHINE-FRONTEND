/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Image from 'next/image';
import logoImg from '../../../assets/imgs/logo-black.svg';
import { toast } from 'sonner';
import { useRouter } from "next/navigation";
import { LoginData, LoginService } from '@/app/services/admins/auth/authService';

export default function LoginAdmin() {
  const route = useRouter();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const data: LoginData = {
      email: email,
      password: password,
    };

    const response = await LoginService(data);

    if(response.code === "success") {
      toast.success("Đăng nhập thành công");
      route.push('/admin/dashboard');
    } else {
      toast.error("Sai tài khoản hoặc mật khẩu");
    }
  }
  return (
    <>
      <div className="w-screen h-screen bg-blue-500 flex items-center justify-center">
        <div className="bg-white px-8.75 py-7.5 rounded-[10px] w-95 text-center">
          <div className="flex justify-center items-center">
            <Image src={logoImg} alt="Logo" />
          </div>
          <div className="text-[24px] font-bold text-center mb-2.5">
            Login to admin account
          </div>
          <div className='w-[320px] mb-5 text-center'>
            Access to the most powerfull tool in the entire design and web industry.
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className='mb-3.75'>
              <input type="email" name="email" placeholder='Enter your email'
                className='bg-[#F7F7F7] w-full h-10 py-2.25 px-5 rounded-xl'
              />
            </div>
            <div className='mb-4.75'>
              <input type="password" name="password" placeholder='Enter your password'
                className='bg-[#F7F7F7] w-full h-10 py-2.25 px-5 rounded-xl'
              />
            </div>

            <button
              type="submit"
              className="w-full h-11 bg-blue-500 text-white font-semibold rounded-xl
             flex items-center justify-center
             transition-all duration-200
             hover:bg-blue-600 hover:shadow-lg
             active:scale-95 active:bg-blue-700
             disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  )
}