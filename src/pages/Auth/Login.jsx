import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useUserActions } from '../../context';
import { Alert, Loader } from '../../components';
import { useMediaQuery } from '../../utils';
import './auth.css'

const LoginPage = () => {
    const mobileView = useMediaQuery(600);
    const navigate = useNavigate();
    const { state, login } = useUserActions();
    const { loader, tokenPresent, loginerror, loginerrorMsg } = state;
    const [ viewAlert, setViewAlert ] = useState(false);
    const closeAlert = () => setViewAlert(false);
    const [ loginInputs, setLoginInputs ] = useState({email:"rutz@gmail.com",password:"rutz"})

    useEffect(()=>{
        if( tokenPresent){
            setTimeout(() => {navigate('/')}, 0);
        }
        if( loginerror ) {
            setViewAlert(true) 
        } 
    },[ tokenPresent, loginerror])
    
    const handleChange = e => {
        const { name, value } = e.target;
        setLoginInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmit = () =>{
        login(loginInputs.email,loginInputs.password)
    }

    return(
        <main className='main-container login-main-container'>
            
            {viewAlert ? <Alert customClass={'loginerror'} action={'error'} closefn={closeAlert} title={'Login Error'} description={loginerrorMsg}/> : " "}
            
            {mobileView ? <Link to={"/"} className="btn-link td text-center m10" role="button">Home</Link> : ' ' }
            
            <section className="login-container">

                {mobileView 
                ?<h1 className="heading3 medium">Login to your account</h1>
                :<h1 className="heading2 medium">Login to your account</h1>
                }
            
                <article className="login-box m-t30">
                    <form className="inner-login-box" >

                        <label htmlFor="email-input" className="text4">Email</label>
                        <input id="email-input" className="text-input login-input" value={loginInputs.email} name='email' type="email" onChange={handleChange}/>

                        <label htmlFor="password-input" className="text4 m-t20">Password</label>
                        <input id="password-input" className="text-input login-input" value={loginInputs.password} name='password' type="password" onChange={handleChange}/>

                        <div className="helper m-t10">
                            <a className="btn-link td text-helpers" role="button">Forgot Password?</a>
                        </div>                    

                        { loader 
                        ?  <span className='button-loader'><Loader /></span>
                        : <button className="btn btn-primary form-login-btn m-t10" onClick={onSubmit} type="button">Sign In</button>  
                        }

                        <Link to={"/signup"} className="btn-link td text-center m-t10" role="button">Register Now</Link>

                    </form>                
                </article>
            </section>
        </main>
    );
}

export { LoginPage }