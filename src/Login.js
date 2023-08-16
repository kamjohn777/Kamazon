import React, { useState } from 'react';
import './Login.css';
import { Link, Navigate} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            navigate('/');
            // Navigate.push('/');
        })
        .catch(error => alert(error.message));
        // firebase login stuff
    }

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if (auth) {
                navigate('/');
                // Navigate.push('/');
            }
        })
        .catch(error => alert(error.message))
        // firebase stuff
    }


    return (
    <div className='login'>
        <Link to='/'>
            <img className='login_logo' src='https://m.media-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png'/>
        </Link>

        <div className='login_container'>
            <h1>Sign-In</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>


               <button type='submit' onClick={signIn} className='login_signIn_btn'>Sign In</button>
               {/* <button type='submit' className="login_signIn_btn signIn_btn" onClick={signIn}><span>Click</span><span>Add to Cart</span></button> */}
            </form>

            <p>By signgin you agree to the terms and policies of Kamazon's use and sales cnoditions</p>

        </div>

        {/* <p><span className='span_lineOne'></span> New to Kamazon <span className='span_lineTwo'></span></p> */}
        <div className='divider divider_break'>
            <h5>New to Kamazon?</h5>
        </div>
        
        <button onClick={register} className='login_register_btn'>Create Your Kamazon Account</button>
    </div>
    )
}

export default Login;