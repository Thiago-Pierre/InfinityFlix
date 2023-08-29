import "./Navbar.css";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

const Navbar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) {
            return;
        }
        navigate(`/search?filme=${search}`)
        setSearch('')  
        //TODO REDIRECIONAMENTO PARA BUSCAR
    }

    return (
        <nav id="navbar">
            <h2>
                <BiCameraMovie />
                <Link to="/">InfinityFlix</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Busque um filme"
                    onChange={(e) => setSearch(e.target.value)} value={search} />
                
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default Navbar;