import React, { useContext } from 'react'
import './Login.css'

import { NavLink } from 'react-router-dom'
import { LoginContext } from '../login_context/LoginContext'

import {FcGoogle} from 'react-icons/fc'
import {SiApple} from 'react-icons/si'


const Login = () => {

    const { userLogin, setUserLogin } = useContext(LoginContext)

    return (
        <div className='login-bg'>
            <div className='login-title-bg'>
                <h1>Board.</h1>
            </div>
            <div className='login-form-bg'>
                <div className='login-form-div'>
                    <div className='login-headings-div'>
                        <h2>Sign In</h2>
                        <p>Sign in to your account.</p>
                    </div>
                    <div className='authentication-options-div'>
                        
                        <button className='auth-options-btn'><FcGoogle size='1rem' />&nbsp;Sign in with Google</button>
                        <button className='auth-options-btn'><SiApple size='1rem'/>&nbsp;Sign in with Apple</button>
                    </div>
                    <form className='login-form' onSubmit={()=>{setUserLogin(!userLogin)}}>
                        <div className='input-div'>
                            <label htmlFor='email'>Email address</label>
                            <input type='mail' placeholder='eg: john123@gmail.com' name='email'/>
                        </div>
                        <div className='input-div'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' name='password' />
                        </div>
                        <NavLink to='/' className='forgot-pass-link'>Forgot password?</NavLink>
                        <input type='submit' name='signin' value='Sign In' className='signIn-btn'/>
                    </form>
                    <p className='register-link'>Don't have an account? <NavLink className='register-nav-link'>Register here</NavLink></p>
                </div>
            </div>
        </div>
    )
}

export default Login