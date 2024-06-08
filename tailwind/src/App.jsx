import React, { useState } from 'react';

const App = () => {
  const [text,settext]=useState('');
  const handel=()=>{
    if(text==''){
      settext('Alert! This is Awesome');
    }else{
      settext('');
    }
    
  }

  return (
    <div className='p-0 m-0 h-screen border border-black overflow-hidden	'>
        <nav className='w-screen flex justify-between bg-red-500	text-white	font-bold	text-lg h-1/5	'>
          <div className='flex items-center space-x-4 p-8 mr-7 	'>
            <button className='text-2xl'>Kalvium</button>
            <button>About us</button>
            <button>Contacts</button>
            <button>Courses</button>
          </div>
          <div className='p-8'>
            <button className='border border-white px-8 py-2 rounded-2xl	' >Login</button>
          </div>
        </nav>

        <div className='border h-3/4'>
          <button className='bg-blue-700 border-white  rounded-2xl font-bold text-4xl text-white px-10 py-4 ml-24 mt-5' onClick={handel}>Click Button One</button>
          {text==''? '':<div className=' text-red-800 border border-red-700 bg-red-300 text-2xl w-3/4 h-20 rounded-md ml-40 mt-10 items-center'><p className='p-5 ml-20'>{text}</p></div>}
        </div>

        <footer className=' h-1/5 bg-gray-300'>
            <p className=' text-center text-2xl px-2'><span>&copy;</span> 2021 Copyright:<span className=' font-bold'>Kalvium</span></p>
        </footer>
    </div>
  );
};

export default App;
