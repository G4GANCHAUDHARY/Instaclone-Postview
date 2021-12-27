import React, { useEffect, useState } from 'react';
import './Postview.css';
import camicon from './cameraicon.png';
// import tenx from './10xacademy.png';
// import bixby from './Bixby_Bridge_Panorama.jpg';
// import swiss from './swiss.jpg';
import heart from './heart.png';
import send from './send.png';


const Postview=()=> {
  const [users,setUsers]=useState();

  const data=  async () => {
    const response= await fetch("http://localhost:3004/user").then(response => response.json());
    setUsers(response);
  }

  useEffect(()=>{
    data();
  },[])

  return (
    <div className="site-container">
      <header className='header'>
        <div className='instaclone'>
          <img className='instaicon' src="https://i1.wp.com/www.healthyentrepreneurs.nl/wp-content/uploads/2015/07/Icon3_V2-2.png?resize=100%2C100&ssl=1" alt="insta"/>
          <p className='title'>Instaclone</p>
        </div>
        <button className='cameraicon' ><img className='cameraiconimg' src={camicon} alt="cam"/></button>
      </header>
      <div className='body'>
      {users && users.map((user)=>(
        <div className='post'>
          <div className='posthead'>
            <div className='postuser'>
              <p className='username'>{user.name}</p>
              <p className='userplace'>{user.location}</p>
            </div>
            <button className='postmenu'>...</button>
          </div>
          <img className='postimage' src={user.PostImage} alt="post" />
          <div className='posticons'>
            <img className='like' src={heart} alt="like icon"/>
            <img className='share' src={send} alt="share icon"/>
            <p className='date'>{user.date}</p>
          </div>
          <div className='postdescr'>
            <p className='numlike'>{user.likes} likes</p>
            <p className='descr'>{user.description}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Postview;
