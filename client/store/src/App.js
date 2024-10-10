import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import App2 from './z_site2/app2';
import AppHomepage from './z_homepage/app_home';
import ItemPage from './z_site2/components2/b_body/itemPage';
import LoginPage from './z_homepage/otherComponents/loginPage';
import { auth, handleUserProfile } from './firebase/utils';
import {useDispatch} from 'react-redux';
import { setCurrentUser } from './redux/User/user.actions';
import { onSnapshot } from "firebase/firestore";
import WithAuth from './hoc/withAuth';
import RegisterPage from './z_homepage/otherComponents/registerPage';
import ProfilePage from './z_homepage/otherComponents/profilePage';
import FavoritesPage from './z_homepage/otherComponents/favoritesPage';
import CartPage from './z_homepage/otherComponents/cartPage';
import Canceled from './z_homepage/otherComponents/canceled';
import Success from './z_homepage/otherComponents/success';

function App(){

  const dispatch = useDispatch();

  useEffect(()=>{
    const authListener = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        console.log("USE EFFECT USER EXISTS")
        const userRef = await handleUserProfile(userAuth);
        const unsub = onSnapshot(userRef, (snapshot) =>{
          dispatch(setCurrentUser({
            ...snapshot.data()
          }));
        })
        return () =>{
          console.log("UNSUBSCRIBE SNAPSHOT") 
          unsub()
        }
      }
      console.log("USE EFFECT USER DOESNT EXISTS")
      dispatch(setCurrentUser(userAuth))
    });
    return () =>{
      console.log("UNSUBSCRIBE AUTH LISTENER") 
      authListener();
    };
  },[dispatch])

  return (
      <BrowserRouter> 
      <Routes>  
        <Route path="/" element={<AppHomepage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/profile" element={<WithAuth><ProfilePage/></WithAuth>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/favorites" element={<WithAuth><FavoritesPage/></WithAuth>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/canceled" element={<Canceled/>}/>
        <Route path="2">
          <Route path="products">
            <Route path=":queries" element={<App2/>}/>
          </Route>
          <Route path="item" element={<App2/>}>
            <Route path=":queries" element={<ItemPage/>}/>
          </Route>
        </Route>
        <Route path="*" element={<Link to='/'>404 Not Found! Home</Link>}/>
      </Routes>
      </BrowserRouter>
  );
  
}

export default App

