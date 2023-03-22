import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, fetchUserBytoken, clearState } from './userSlice';
import {TailSpin} from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Dashboard = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isFetching, isError } = useSelector(userSelector);
  useEffect(() => {
    dispatch(fetchUserBytoken({ token: localStorage.getItem('token') }));
  }, []);

  const { username, email } = useSelector(userSelector);

  useEffect(() => {
    if (isError) {
      dispatch(clearState());
      navigate('/login');
    }
  }, [isError]);

  const onLogOut = () => {
    localStorage.removeItem('token');
    dispatch(clearState());
    navigate('/login');
  };

  return (
    <div className="container mx-auto">
      <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
  <div class="navbar p-6 flex justify-between ">
      <div class="form-control  relative">
      <input type="text" placeholder="Search" class="input w-96 bg-slate-200" />
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute top-3 right-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </div>
  <div class=" gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
      <label tabindex="0" class="btn btn-ghost  btn-circle avatar">
        <div class="w-10  rounded-full">
          <img src="https://reqres.in/img/faces/2-image.jpg" />
        </div>
      </label>
  </div>
</div >
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <div className='flex justify-center item-center'>
    {isFetching ? (
        <TailSpin type="Puff" className="grid place-content-center" color="#00BFFF" height={100} width={100} />
      ) : (
        <Fragment>
          

          <button
            onClick={onLogOut}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Log Out
          </button>
        </Fragment>
      )}
    </div>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-2 w-60 bg-base-100 text-slate-400 text-bold">
      <li><img className='w-40' src='https://i.ibb.co/JqRCKH9/336395884-1019913245648464-1816671081592085140-n.png'></img></li>
      <br />
      <li><p className='text-left'>Pages</p></li>
      <li><a href='/dashboard'><Icon icon="iwwa:dashboard" />Dashboard</a></li>
      
      <li><a href='/users' className='border bg-slate-200'><Icon icon="mdi:user" />Users</a></li>
      <li><a><Icon icon="mdi:sale-box-outline" />Sales<br /></a></li>
    </ul>
  
  </div>
</div>
      
      
    </div>
  );
};

export default Dashboard;