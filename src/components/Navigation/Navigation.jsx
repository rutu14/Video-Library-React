import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Login, Logo, Logout, User } from '../../asset';
import { useUserActions } from '../../context';
import './nav.css';

const Navigation = () => {
    const { state, signout } = useUserActions();
    const { tokenPresent } = state;
	
	const ShowDropdown = () => {
        return(
            <div id="dropdown" className="dropdown-menu">
                <Link to={'/'} className="btn-link cp td text-center menu-option" onClick={signout} role="button">
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
            <>
				<Link to={'login'} className="btn btn-primary outline td cp login-btn login-btn-outline" type="button">
					LOGIN
				</Link>
				<Link to={'signup'} className="btn btn-primary td cp login-btn" type="button">
					SIGNUP
				</Link>
            </>
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
            
            {tokenPresent
            ?   <div className="avatar avatar-lg user mobile-avatar"><User/></div>  
            :   <Link to={'login'} className="btn btn-primary outline login-sign mobile-avatar" type="button">
                    <Login/>
                </Link>
            } 
			 
			<nav className="nav-items">
                {tokenPresent
                ?   <DropdownAvatar/>
                :   <LoginButton/>
                }					
			</nav>
      	</header>

	</>
    );
}

export { Navigation }

