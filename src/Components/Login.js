import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userSelector, clearState } from './userSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Login = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, errors, handleSubmit } = useForm();
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(
    userSelector
  );
  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      navigate('/dashboard');
    }
  }, [isError, isSuccess]);

  return (
    <Fragment>
      <div class="navbar px-12 bg-base-100">
  <div class="flex-1 ">
  <img className='w-32' src='https://i.ibb.co/JqRCKH9/336395884-1019913245648464-1816671081592085140-n.png'></img>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      
      <li className='border rounded-2xl bg-slate-200' tabindex="0">
        <a className='text-slate-400'>
          English (UK)
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 bg-base-100">
          
        </ul>
      </li>
      
    </ul>
  </div>
</div>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 class=" text-center text-xl font-bold text-gray-900">
            Getting Started
          </h2>
          <h4 class=" mt-2 text-center text-sm font-bold text-slate-400">
            Create an account to continue
          </h4>
        </div>
        <div className='mt-4 flex flex-row gap-6 justify-center'>
        <div className='border flex flex-row rounded-2xl p-3 bg-slate-200'>
        <Icon className='text-xl text-red-600 mx-2' icon="mdi:google" />
        <a className='text-slate-400'>
        
          Sign Up with Google
          
        </a>
        </div>
        <div className='border flex flex-row rounded-2xl p-3 bg-slate-200'>
        <Icon className='text-slate-400 mx-2 text-xl' icon="ic:baseline-apple" />
        <a className='text-slate-400'>
          Sign Up with Apple ID
          
        </a>
        </div>
        </div>
        <p className='mt-4 text-slate-400'>OR</p>
        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
            >
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  <div className='flex flex-row text-md'>
                  <Icon className='text-slate-400 mx-2 text-xl' icon="material-symbols:alternate-email" />
        <p className='text-slate-400'>
          Your Email
          
        </p>
                  </div>
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    {...register("email", {
                      pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                    })}
                    required
                    className="appearance-none block w-full px-3 py-2 bg-slate-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  <div className='flex flex-row text-md'>
                  <Icon className='text-slate-400 mx-2 text-xl' icon="material-symbols:alternate-email" />
        <p className='text-slate-400'>
          Create Password
          
        </p>
                  </div>
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    {...register("password", { required: true })}
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 bg-slate-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div class="form-control flex flex-row ">
  
    
  <input type="checkbox" checked="" class="mx-3 bg-slate-300 border-0 checkbox" />
  <span class="label-text text-slate-400">Remember Me</span> 

</div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isFetching ? (
                    <svg
                      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : null}
                  Sign in
                </button>
              </div>
            </form>
            <div class="mt-6">
              <div class="relative">
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-slate-400">
                    Don't have an account yet?<Link to="/"><span className='text-blue-500'> SignUp</span></Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;