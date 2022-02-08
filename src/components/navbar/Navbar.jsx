import {BrowserRouter as Router, Routes, Route, Link, unstable_HistoryRouter} from 'react-router-dom';
import React, { useState } from 'react';
import './Navbar'
import First from './First';
import Second from './Second';
import Third from './Third';
import logo from '../images/the3.PNG';
import Facebook from './Facebook';
import News from './News';
import Google from './Google';
import Free from './Free';
import Security from './Security';
import Sessions from './Sessions';
import Lives from './Lives';
import Articles from './Articles';
import Android from './Android';
import Linux from './Linux';
import Windows from'./Windows';
function Navbar() {
        const[click,setClick] = useState(false);
        const handleClick = () => setClick(!click)
        return (
            <div>
                <Router>
                    
                <nav className="navbar">
                <Link to='/' className='logo'>
                    <i class="fab fa-facebook" aria-hidden="true"></i>
                    <i class="fab fa-twitter" aria-hidden="true"></i>
                    <i class="fab fa-instagram" aria-hidden="true"></i>
                    <i class="fab fa-youtube" aria-hidden="true"></i>
                </Link>
               <ul className={click ? "nav-menu active" : "nav-menu"}>
                   <li className="nav-item">
                       <Link to='/First' className="nav-link" onClick={handleClick}>اعلن في موقع المحترف</Link>
                   </li>
                   <li>
                       <Link to='/Second' className="nav-link" onClick={handleClick}>البث المباشر مدونة المحترف</Link>
                   </li>

                   <li>
                       <Link to='/Third' className='nav-link' onClick={handleClick}> إلتحق بفريق العمل</Link>
                   </li>
                </ul>
               
                </nav>
                <br></br>
                    <img src={logo} alt="logo" className='image'/>
                   
               <nav className='navbar2'>
               <Link to='/' className='logo'>
                   <div className='pere'>
                   <div className='search'>
                        <i class="fa fa-search" aria-hidden="true"></i>
                        </div>
                        <div className='moon'>
                        <i class="fas fa-moon"></i>
                        </div>
                   </div>
                </Link>
                <ul className={click ? "nav-menu2 active" : "nav-menu2"}>
              
                <li className='nav-item2'>
                <Link to='/News' className='nav-link2' onClick={handleClick}> أخبار  </Link>
                </li>
                <li className='nav-item2'>
                <Link to='/Free' className='nav-link2' onClick={handleClick}> المجانيات</Link>
                </li>
                <li className='nav-item2'>
                <Link to='/Lives' className='nav-link2' onClick={handleClick}>حصريات</Link>
                </li>
                
                <li className='nav-item2'>
                <Link to='/Facebook' className='nav-link2' onClick={handleClick}>فيسبوك</Link>
                </li>
                <li className='nav-item2'>
                <Link to='/Google' className='nav-link2' onClick={handleClick}>جوجل</Link>
                </li>
                <li className='nav-item2'>
                <Link to='/Linux' className='nav-link2' onClick={handleClick}>لينكس</Link>
                </li>
                
                <li className='nav-item2'>
                <Link to='/Security' className='nav-link2' onClick={handleClick}>حماية</Link>
                </li>
                <li className='nav-item2'>
                <Link to='/Sessions' className='nav-link2' onClick={handleClick}>الحلقات</Link>
                </li>

                <li className='nav-item2'>
                <Link to='/Android' className='nav-link2' onClick={handleClick}>أندرويد</Link>
                </li>

                <li className='nav-item2'>
                <Link to='/Windows' className='nav-link2' onClick={handleClick}>ويندوز</Link>
                </li>
                <li className='nav-item2'>
                <Link to='/Articles' className='nav-link2' onClick={handleClick}>مقالات</Link>
                </li>
                <li className='nav-item2'>
                <Link to='/' className='nav-link2'><i class="fa fa-home"></i></Link>
                </li>

                </ul>
                <div onClick={handleClick} className="nav-icon">
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                
               </nav>
              
                <Routes>
                    <Route path='/First' element={<First />}></Route>
                    <Route path='/Second' element={<Second />}></Route>
                    <Route path='/Third' element={<Third />}></Route>
                </Routes>      
                <Routes>
                <Route path='/Facebook' element={<Facebook />}></Route>
                    <Route path='/Google' element={<Google />}></Route>
                    <Route path='/News' element={<News />}></Route>
                    <Route path='/Free' element={<Free />}></Route>
                    <Route path='/Security' element={<Security />}></Route>
                    <Route path='/Sessions' element={<Sessions />}></Route>
                    <Route path='/Lives' element={<Lives />}></Route>
                    <Route path='/Linux' element={<Linux />}></Route>
                    <Route path='/Android' element={<Android />}></Route>
                    <Route path='/Articles' element={<Articles />}></Route>
                </Routes>
                </Router>     
                </div>   
           
        );
    
}

export default Navbar;