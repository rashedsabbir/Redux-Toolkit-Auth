import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://reqres.in/api/users?page=${currentPage}`, {
        method: 'GET',
      });
      const data = await res.json();
      setUsers(data.data);
      setTotalPages(data.total_pages);
    };
    fetchData();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
    

    return (
        
      <div className="container mx-auto">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="navbar px-6 flex justify-between ">
            <div className="form-control relative">
              <input type="text" placeholder="Search" className="input w-96 bg-slate-200" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute top-3 right-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://reqres.in/img/faces/2-image.jpg" />
                </div>
              </label>
            </div>
          </div>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
          <div className="h-10/12 px-12">
            <h1 className="text-xl font-bold text-left py-8">Users List</h1>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-slate-100">
                  <th className="p-3 font-bold text-left uppercase bg-slate-100 text-slate-500 hidden lg:table-cell">#ID</th>
                  <th className="p-3 font-bold text-left uppercase bg-slate-100 text-slate-500 hidden lg:table-cell">User</th>
                  <th className="p-3 font-bold text-left uppercase bg-slate-100 text-slate-500 hidden lg:table-cell">Email</th>
                  <th className="p-3 font-bold uppercase bg-slate-100 text-slate-500 hidden text-end lg:table-cell">
                    Options
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr className="bg-white lg:hover:bg-gray-100 flex justify-center items-center lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td className="w-full lg:w-auto p-3 text-slate-600 text-left block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">#ID</span>
                      <span className="py-1 px-3 text-xs font-bold">{index + 1}</span>
                    </td>
                    <td className="w-full lg:w-auto p-3 text-slate-600 text-left block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute w-auto top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                        USER
                      </span>
                      <div className="flex lg:justify-start justify-center items-center">
                        <img referrerPolicy="no-referrer" className="h-8 w-8 rounded-full mr-4" referrerpolicy="no-referrer" src={user.avatar} />
                        {`${user.first_name} ${user.last_name}`}
                      </div>
                    </td>
                    <td className="w-full lg:w-auto p-3 text-slate-600 text-left block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute w-auto top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                        EMAIL
                      </span>
                      {user.email}
                    </td>
                    <td className="w-full lg:w-auto p-3 text-slate-600  block lg:table-cell lg:static">
                      <div className='flex justify-end items-end'>
                      <Icon className='' icon="iwwa:option-horizontal" />
                      </div>
                    
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center items-center mt-8">
              <button
                disabled={currentPage === 1}
                onClick={prevPage}
                className="bg-gray-300 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded disabled:bg-blue-500"
              >
                1
              </button>
              <button
                disabled={currentPage === totalPages}
                onClick={nextPage}
                className="bg-gray-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-blue-500"
              >
                2
              </button>
            </div>
          </div>
        </div>
      
    
<div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-2 w-60 bg-base-100 text-slate-400 text-bold">
      <li><img className='w-40' src='https://i.ibb.co/JqRCKH9/336395884-1019913245648464-1816671081592085140-n.png'></img></li>
      <br />
      <li><p className='text-left'>Pages</p></li>
      <li><a ><Icon icon="iwwa:dashboard" /><Link to="/dashboard">Dashboard</Link></a></li>
      
      <li><a className='border bg-slate-200'><Icon icon="mdi:user" /><Link to="/users">Users</Link></a></li>
      <li><a><Icon icon="mdi:sale-box-outline" />Sales<br /></a></li>
    </ul>
  
  </div>
      </div>
      </div>
    );
};

export default Users;