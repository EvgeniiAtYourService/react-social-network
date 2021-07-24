import React from 'react'
import MyPosts from './My posts/MyPosts';
import classes from './Profile.module.css'
console.log(classes);
function Profile() {
    return (
             <div>
                <div>
                  <img src="https://share.america.gov/wp-content/uploads/2018/06/international-waters-freedom-of-navigation-DY8ERP.jpg" ></img>
                </div>
                <div>
                  ava + des
                </div>
                <MyPosts />
             </div>
    )
}

export default Profile
