import React, { useContext } from 'react'
import Navbar from '../../component/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authentication/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
    
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
    
        console.log(name, photo, email, password);
    
        
        createUser(email, password)
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      return (
        <div>
         
            <h2 className="text-3xl text-center ">Please Register</h2>
            <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="text-center mt-4">
              Already Have an Account?
              <Link className="text-blue-600 font-bold ml-2" to="/login">
                Login
              </Link>
            </p>
          
        </div>
      );
}

export default Register