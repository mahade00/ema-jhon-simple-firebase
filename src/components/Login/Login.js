import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import placeOrderPath from '../PriveteRoute/PrivateRoute';
import './Login.css';


const Login = () => {
    const { signUsingGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri =location.state?.path || '/shop';
    console.log('Login Location: ',redirect_uri);

    const handleGoogleLogin = () => {
        signUsingGoogle()
        .then(result => {
            navigate(redirect_uri);
        })
}

    return (
        <div className='login-form'>
            <div>                
                <h2>Log in</h2>
                <form >
                    <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" />
                <br />
                <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john <Link to='/register'>Create an account</Link> </p>
                <div>-----------or-----------</div>
                <button onClick={handleGoogleLogin} className='btn-regular'>Google Sign In</button>
            </div>
            
        </div>
    );
};

export default Login;