import { memo, useEffect, useReducer, useRef } from "react";
import "./Navbar.css";

function Navbar() {

    const navbar = useRef();

    function scroller(event) {
        if(window.scrollY > 20) {
            navbar.current.classList.replace("bg-transparent", "bg-light");
            navbar.current.classList.replace("navbar-dark", "navbar-light");
            navbar.current.classList.add("border-bottom");
        } else {
            navbar.current.classList.replace("navbar-light", "navbar-dark");
            navbar.current.classList.replace("bg-light", "bg-transparent");
            navbar.current.classList.remove("border-bottom");
        }
    }

    function setActive(e) {
        let parent = e.target.parentElement.parentElement;
        let children = [...parent.children]
        children.forEach(ele => ele.firstChild.classList.remove("active"));
        e.target.classList.add("active");
    }

    useEffect(() => {
        window.addEventListener("scroll", scroller);
        return () => window.removeEventListener("scroll", scroller);
    }, []);

    return (
        <>
            <nav ref={navbar} className="fixed-top py-2 navbar navbar-expand-lg navbar-dark bg-transparent">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={"/assets/images/Mini-Logo-NoBg.png"} width={50} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav py-0 mx-auto pe-lg-5 mb-2 mb-lg-0">
                    <li onClick={(e) => setActive(e)} className="mx-3 nav-item">
                        <a className="nav-link active" aria-current="page" href="#intro">Home</a>
                    </li>
                    <li onClick={(e) => setActive(e)} className="mx-3 nav-item">
                        <a className="nav-link" aria-current="page" href="#dehaze-div">Dehaze</a>
                    </li>
                    <li onClick={(e) => setActive(e)} className="mx-3 nav-item">
                        <a className="nav-link" aria-current="page" href="#footer-div">About</a>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li> */}
                </ul>
                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
            </div>
            </nav>
        </>
    );
}

export default memo(Navbar);