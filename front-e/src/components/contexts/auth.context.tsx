'use client';

import Login from '@/app/(main)/login/page';
import { api } from '@/axios';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
  createContext,
} from 'react';
import { toast } from 'react-toastify';

type LoginProps = {
  email: string;
  password: string;
  role: string;
};

type Register = {
  name: string;
  email: string;
  password: string;
};

// type User = {
//   name: string | object
// }

type AuthContextType = {
  login: ({ email, password }: LoginProps) => void;
  register: ({ email, password }: Register) => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  type ResponseType = {
    email: string;
    password: string;
  };

  const [user, setUser] = useState(null);

  const login = async ({ email, password, role }: LoginProps) => {
    try {
      const response = await api.post('/auth/login', { email, password, role });

      const userRole = response.data;

      localStorage.setItem('token', response.data.token);

      toast.success(response.data.message);
      setUser(response.data.user);

      //role-г нь шалгаад админ руу сэвэл үндсэн хуудасруу үсрэхийг зааж байна

      if (response.data.user.role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/');
      }
    } catch (error) {
      const err = error as AxiosError;

      if (err.response && err.response.data) {
        const message = (err.response.data as { message?: string }).message;
        if (message) {
          toast.error(message);
        } else {
          toast.error('Something went wrong');
        }
      } else {
        toast.error('Network or server error');
      }
    }
  };

  const register = async ({ name, email, password }: Register) => {
    console.log('reg password', password);
    try {
      const response = await api.post('/auth/register', {
        name,
        email,
        password,
      });

      console.log('API responce', response);

      router.push('/login');
    } catch (error) {
      const err = error as AxiosError;

      if (err.response && err.response.data) {
        const message = (err.response.data as { message?: string }).message;
        if (message) {
          toast.error(message);
        } else {
          toast.error('Something went wrong');
        }
      } else {
        toast.error('Network or server error');
      }
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('token');

      if (!token) return;

      const res = await api.get('/user/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data);
    };

    loadUser();
  }, []);

  // useEffect(() => {
  //   if (!user) router.push('/login');
  // }, [user]);

  // const login = async ({ email, password }: ResponseType) => {
  //   try {
  //     const response = await api.post('/auth/login', { email, password });

  //     localStorage.setItem('token', response.data.token);
  //     toast.success(response.data.message);
  //     setUser(response.data);

  //     router.replace('/');
  //   } catch (err) {
  //     console.log(err);
  //     toast.error(err.message);
  //   }
  // };

  return (
    <AuthContext.Provider value={{ login, register }}>
      {children}
    </AuthContext.Provider>
  );
};
