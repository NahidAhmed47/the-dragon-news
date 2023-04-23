import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero ">
  <div className="hero-content flex-col ">
    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" placeholder="Your name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="url" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-3">
          <button className="btn bg-red-800 text-white border-0">Login</button>
        </div>
        <div>
            <p className='text-sm font-semibold font-mono px-5 mt-2'>Already have an account? please <Link to='/login' className='text-red-500 underline'>Login</Link></p>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;