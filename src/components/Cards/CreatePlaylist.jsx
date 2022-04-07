import { useState } from "react";
import { usePlaylist } from "../../context";
import { Loader } from "../../components";
import { toast } from "react-toastify";

const CreatePlaylist = ({close }) =>{

    const [ playlistDetails, setPlaylistDetails ] = useState({title:"",desc:""});
    const { state, addPlaylist } = usePlaylist();
    const { loader } = state;

    const handleChange = e => {
        const { name, value } = e.target;
        setPlaylistDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmit = () =>{
        if( playlistDetails.title === "" ){
            toast.warning("Title is mandatory!");
        }else{
            addPlaylist({ title: playlistDetails.title, description: playlistDetails.desc });
            setPlaylistDetails({ title:" ", desc: " " });
            close();
        }
    }

    return(
        <section className="modal-backdrop" >
            <div className="modal-dialog">
                <button className="btn close-modal cp" onClick={close}>✕</button>
                <section className="modal-content text4 medium">
                    <form className="inner-login-box" >

                        <label htmlFor="title-input" className="text4 font-color">Title</label>
                        <input id="title-input" className="text-input login-input" value={playlistDetails.title} name='title' type="text" onChange={handleChange}/>

                        <label htmlFor="desc-input" className="text4 m-t20 font-color">Description</label>
                        <input id="desc-input" className="text-input login-input" value={playlistDetails.desc} name='desc' type="text" onChange={handleChange}/>                

                        { loader 
                        ?  <span className='button-loader'><Loader/></span>
                        : <button className="btn btn-primary form-login-btn m-t10" onClick={onSubmit} type="button">Create</button>  
                        }

                    </form>  
                </section>
            </div>
        </section>
    )
}

export { CreatePlaylist }