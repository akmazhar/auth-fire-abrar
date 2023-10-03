import { Link } from "react-router-dom";


const Login = () => {



    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
     
    
    
    return (
    
        <div className="hero min-h-screen bg-base-200">
       <div className="hero-content flex-col">
       <div className="text-center">
      <h1 className="text-5xl text-blue-700 font-bold">Login now!</h1>
      
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
    
      
      <form onSubmit={handleLogin}>
     

  
    
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>


          <input type="email"
           placeholder="Email" 
           className="input input-bordered" 
           name="email" required />
    
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" 
          placeholder="Password" 
          className="input input-bordered"
          name="password" required />
    
    
    
          <label className="label">
            <a href="#" className="label-text-alt link text-red-400 font-semibold link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    





    <p>New here? Please <Link to="/register"><button className="btn font-semibold text-green-600 btn-link">Register</button></Link> </p>
    
    
      </div>
    </div>
    </div>
    </div>
    );
    };
    
 
    

export default Login;