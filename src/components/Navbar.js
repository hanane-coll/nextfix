import React ,{useEffect,useState} from 'react';
import notflix from '../notflix.png';
import avatar from '../avatar.png';
import './navbar.css';
import { FaSearch } from 'react-icons/fa';



const Navbar = () => {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 100){
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll",handleShow,false);
        };
    },[])

    return (
        <div className={`nav ${show && "navPink"}`}>
            <img className='logo' src={notflix} alt="notflix  " />
            <div className="userNav">
                <FaSearch/>
                <img className='avatar' src={avatar} alt="avatar" />
            </div>
        </div>
    )
}

export default Navbar
