import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useUserActions } from '../../context';
import { Alert, Loader } from '../../components';
import { useMediaQuery } from '../../utils';
import './auth.css'

const SignUpPage = () => {
    const mobileView = useMediaQuery(600);
    const navigate = useNavigate();
    const { state, signup } = useUserActions();
    const { loader, tokenPresent, signuperror, signuperrorMsg } = state;
    const [ viewAlert, setViewAlert ] = useState(false);
    const closeAlert = () => setViewAlert(false);
    const [ signupInputs, setSignupInputs ] = useState({ firstname: "" , lastname: "", email: "",password: "" })


    useEffect(()=>{
        if( tokenPresent){
            setTimeout(() => {navigate('/')}, 0);
        }
        if( signuperror ) {
            setViewAlert(true) 
        } 
    },[ tokenPresent, signuperror])

    const handleChange = e => {
        const { name, value } = e.target;
        setSignupInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmit = () =>{
        signup( signupInputs.firstname, signupInputs.lastname, signupInputs.email, signupInputs.password)
    }

    return(        
        <main className='main-container login-main-container'>
            {viewAlert && <Alert customClass={'loginerror signerror'} action={'error'} closefn={closeAlert} title={'Error in SignUp'} description={signuperrorMsg} />}
            
            {mobileView ? <Link to={"/"} className="btn-link td text-center m10" role="button">Home</Link> : ' ' }

            <section className="login-container">

            {mobileView ? <h1 className="heading3 medium">Register Yourself</h1> :<h1 className="heading2 medium">Register Yourself</h1> }

            <article className="login-box m-t20">
                <form className="inner-login-box" >

                    <label htmlFor="firstname-input" className="text4">First Name</label>
                    <input id="firstname-input" className="text-input login-input" value={signupInputs.firstname} name='firstname' type="email" onChange={handleChange}/>

                    <label htmlFor="lastname-input" className="text4">Last Name</label>
                    <input id="lastname-input" className="text-input login-input" value={signupInputs.lastname} name='lastname' type="email" onChange={handleChange}/>

                    <label htmlFor="email-input" className="text4">Email</label>
                    <input id="email-input" className="text-input login-input" value={signupInputs.email} name='email' type="email" onChange={handleChange}/>

                    <label htmlFor="password-input" className="text4">Password</label>
                    <input id="password-input" className="text-input login-input" value={signupInputs.password} name='password' type="password" onChange={handleChange}/>

                    { loader 
                    ?  <span className='button-loader'><Loader /></span>
                    :  <button className="btn btn-primary form-login-btn m-t10" onClick={onSubmit} type="button">Sign Up</button> 
                    }

                    <Link to={"/login"} className="btn-link td text-center m-t10" role="button">Login</Link>

                </form>                
            </article>
        </section>
        </main>
    );
}

export { SignUpPage }