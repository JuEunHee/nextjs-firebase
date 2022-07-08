import type { NextPage } from 'next';
import Link from 'next/link';

const Login = () => (
  <div className="hero min-h-screen bg-base-200">
    <div className="hero-content gap-12 flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left lg:w-1/2">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control my-2">
            <button type="button" className="btn btn-primary">
              Login
            </button>
          </div>
          <Link href="/" passHref>
            <a className="link text-right text-gray-500">Forgot password?</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const Home: NextPage = () => <Login />;

export default Home;
