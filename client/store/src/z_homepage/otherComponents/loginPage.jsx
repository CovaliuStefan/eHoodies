import React, {useEffect, useState} from "react";
import "./loginPage_css.css";
import { Link, useNavigate } from "react-router-dom";
import {signInWithGoogle, signInUser, resetAllSuccessStates} from '../../redux/User/user.actions'
import {useDispatch,useSelector} from 'react-redux'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
  });

function LoginPage(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { currentUser } = useSelector(mapState);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
          useEffect(() => {
            if (currentUser) {
              resetForm();
              dispatch(resetAllSuccessStates())
              navigate('/')
            }
          }, [currentUser,navigate,dispatch]);
        
          const resetForm = () => {
            setEmail('');
            setPassword('');
          };
        
          const handleSubmit = e => {
            e.preventDefault();
            dispatch(signInUser({ email, password }));
          }
        
          const handleGoogleSignIn = () => {
            dispatch(signInWithGoogle());
          }


    return(
        <div className="loginPage">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />

              <input
                type="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />

              <button type="submit">
                LogIn
              </button>
            </form>
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
            <Link to="/register">
              Register
            </Link>
            {` | `}
            <Link to="/recovery">
              Reset Password
            </Link>
          </div>      
        </div>
    )
}

export default LoginPage;