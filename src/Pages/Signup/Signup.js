import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import signUpImg from '../../assets/images/register.png'
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Signup = () => {
    const {createUser, updateUser, googleSignIn} = useContext(AuthContext);
    const [createUserEmail, setCreateUserEmail] = useState("");
    const [token] = useToken(createUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleCreateUser = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = 'user'

        const userInfo = {
            displayName: name
        }

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            updateUser(userInfo)
            .then( () => {
              saveUser(name,email, role);
              
            })
            .then()
        })
        .then(err => console.error(err)) 
    }

    const handleGoogleSignIn = () => {
      googleSignIn()
      .then(result => {
          const user = result.user;
          console.log(user);
          const role = 'user';
          saveUser(user.displayName, user.email, role);
      })
      .catch(err => {
          console.error(err);
      })
  }

  const saveUser = (name, email, role) => {
    const user = {name, email, role};
    fetch('https://rentgo-server.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      setCreateUserEmail(email)
      navigate(from, {replace: true})
    })
  }


    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse justify-around">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleCreateUser} className="card-body">
            <h1 className="text-3xl font-bold">Sign Up Now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  name='name'
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  className="input input-bordered"
                /> 
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <p className="">Already have an account? please<Link to="/login" className="text-primary"> Log In</Link></p>
              <div className="divider">OR</div>
              <div className="form-control">
                <button onClick={handleGoogleSignIn} className="btn btn-success text-white flex items-center"><FaGoogle className='mr-2'></FaGoogle> Google Sing In</button>
              </div>
            </form>
          </div>
          <div className="text-center lg:text-left lg:w-1/2">
           <img src={signUpImg} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Signup;