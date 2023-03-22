import React from 'react';
import { Icon } from '@iconify/react';



const Users = () => {
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
</div>
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <div className='h-10/12 px-12'>
            <h1 className='text-2xl font-bold text-left py-8'>Users List</h1>

            <table className="w-full text-sm ">
                <thead>
                    <tr className='text-slate-100 '>
                        <th className="p-3 font-bold text-left uppercase bg-slate-100 text-slate-500  hidden lg:table-cell">#ID</th>
                        <th className="p-3 font-bold text-left uppercase bg-slate-100 text-slate-500  hidden lg:table-cell">user</th>
                        <th className="p-3 font-bold text-left uppercase bg-slate-100 text-slate-500  hidden lg:table-cell">email</th>
                        <th className="p-3 font-bold uppercase bg-slate-100 text-slate-500  hidden text-end lg:table-cell">options</th>
                    </tr>
                </thead>

                <tbody>
                    

                            <tr className="bg-white lg:hover:bg-gray-100 flex justify-center items-center lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                <td className="w-full lg:w-auto p-3 text-slate-600 text-left block lg:table-cell relative lg:static">
                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">#ID</span>
                                    <span className=" py-1 px-3 text-xs font-bold">{1}</span>
                                </td>
                                <td class="w-full lg:w-auto p-3 text-slate-600 text-left block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute w-auto top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">USER</span>
                                    <div className='flex lg:justify-start justify-center items-center'>
                                    <img referrerPolicy="no-referrer"
                                        className="h-8 w-8 rounded-full mr-4"
                                        referrerpolicy="no-referrer"
                                        src=''
                                        alt=""
                                    />
                                    <span>{}</span>
                                    </div>
                                </td>
                                <td className="w-full lg:w-auto p-3 text-slate-600 text-left block lg:table-cell relative lg:static">
                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">EMAIL</span>
                                    <span>{}</span>
                                </td>
                                <div className='flex justify-end items-end'>
                                <td className=" lg:w-auto p-3 text-slate-600  lg:table-cell ">
                                    <span className="lg:hidden  bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Options</span><span className=''><Icon className='' icon="iwwa:option-horizontal" /></span>
                                </td></div>
                            </tr>
                       

                </tbody>

            </table>
        </div>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-2 w-60 bg-base-100 text-slate-400 text-bold">
      <li><img className='w-40' src='https://i.ibb.co/JqRCKH9/336395884-1019913245648464-1816671081592085140-n.png'></img></li>
      <br />
      <li><p className='text-left'>Pages</p></li>
      <li><a href='/'><Icon icon="iwwa:dashboard" />Dashboard</a></li>
      
      <li><a href='/users' className='border bg-slate-200'><Icon icon="mdi:user" />Users</a></li>
      <li><a><Icon icon="mdi:sale-box-outline" />Sales<br /></a></li>
    </ul>
  
  </div>
</div>
      
      
    </div>
    );
};

export default Users;