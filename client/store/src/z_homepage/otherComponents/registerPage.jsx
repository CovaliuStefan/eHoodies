import React, {useEffect, useState} from "react";
import "./loginPage_css.css";
import { Link, useNavigate } from "react-router-dom";
import {signUpUser, signInWithGoogle, resetAllSuccessStates} from '../../redux/User/user.actions'
import {useDispatch,useSelector} from 'react-redux'

const mapState = ({ user }) => ({
    signUpSuccess: user.signUpSuccess,
    signUpError: user.signUpError
  });

function RegisterPage(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { signUpSuccess, signUpError } = useSelector(mapState);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState('')

          useEffect(() => {
            if (signUpSuccess) {
              resetForm();
              dispatch(resetAllSuccessStates())
              navigate('/')
            }
          }, [signUpSuccess,navigate,dispatch]);

          useEffect(() => {
            // if (Array.isArray(signUpError) && signUpError.length>0) {
              setErrors(signUpError)
            // }
          }, [signUpError]);
        
          const resetForm = () => {
            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
          };
        
          const handleSubmit = e => {
            e.preventDefault();
            dispatch(signUpUser({ displayName ,email, password, confirmPassword }));
            // console.log(password)
          }

          const handleGoogleSignIn = () => {
            dispatch(signInWithGoogle());
          }

    return(
        <div className="registerPage">
          <p>Register Page</p>
          {errors}

            <form onSubmit={handleSubmit}>

          <p>displayName:</p>
          <input
            type="text"
            name="text"
            value={displayName}
            onChange={e => setDisplayName(e.target.value)}
          />

          <p>email:</p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <p>passowrd:</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <p>confirm passowrd:</p>
          <input
            type="password"
            name="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />  

          <button type="submit">
            LogIn
          </button>

          <div className="socialSignin">
            <div className="row">
              <button onClick={handleGoogleSignIn}>
                Sign in with Google
              </button>
            </div>
          </div>

          <div className="links">
          <Link to="/">
              Home
            </Link>
            {` | `}
            <Link to="/login">
              Login
            </Link>
            {` | `}
            <Link to="/recovery">
              Reset Password
            </Link>
          </div>

        </form>
        </div>
    )
}

export default RegisterPage;