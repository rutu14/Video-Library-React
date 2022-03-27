import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Login, Logo, Logout, User } from '../../asset';
import { Sidebar } from './Sidebar';
import './nav.css';

const Navigation = () => {
	
	const ShowDropdown = () => {
        return(
            <div id="dropdown" className="dropdown-menu">
                <Link to={'/'} className="btn-link cp td text-center menu-option" role="button">
                   <Logout width={20} height={20}/> Logout
                </Link>
            </div>        
        );
    }
    
    const DropdownAvatar = () => {    
        const [isOpen, setIsOpen] = useState(false);
        const toggleDropdown = () => setIsOpen(!isOpen);
    
        return(
            <div className="account">
                <button className="avatar avatar-lg user cp" onClick={toggleDropdown}>
					<User/>
				</button>
                {isOpen && ( <ShowDropdown/> )}
            </div>
        );
    }
    
    const LoginButton = () => {
        return (
            <li>
				<Link to={'/'} className="btn btn-primary outline login-btn" type="button">
					LOGIN
				</Link>
				<Link to={'/'} className="btn btn-primary login-btn" type="button">
					SIGNUP
				</Link>
			</li> 
        );
    }
  
    return(
      <>
        <header className="nav-header header">
			<div className="header-logo nav-title">
				<Logo width={40} height={40}/>
				<h1 className="heading2 medium brand-name">
					CHITRAM
				</h1>
			</div> 
			<Link to={'/'} className="btn btn-primary outline login-sign mobile-avatar" type="button">
				<Login/>
			</Link> 
			<nav className="nav-items">
				<ul>
					{/* <LoginButton/> */}
					<DropdownAvatar/>
				</ul>
			</nav>
      	</header>
		<Sidebar/>

	</>
    );
}

export { Navigation }

