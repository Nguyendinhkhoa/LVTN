import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Register from '../Auth/components/Register';


SignUp.propTypes = {
    
};


function SignUp(props) {
  const [user,SetUser] = useState({
    Value :{
      email : '',
      username : '',
      password : '',
      password_confirm : ''
    },
    Error :{
      email : '',
      username : '',
      password : '',
      password_confirm : ''
    },
  })
  const handleChange = (event)=>{
    let {value,name,type} = event.target;
    let newValue = {...user.values,[name]:value}
    let newError = {...user.errors};
    SetUser ({
      Value :newValue,
      Error :newError,
   });
  }
  
  const handleSubmit = (values)=>{

    console.log("Form submit",values);
    //viet ham goi api
  }
    return (
        <>
          <div className="container">
            <div className="row">
            <div className=" mx-auto col-md-6 ">
            <Register onSubmit={handleSubmit}/>
            </div>
            </div>
          </div>

        </>
    );
}

export default SignUp;