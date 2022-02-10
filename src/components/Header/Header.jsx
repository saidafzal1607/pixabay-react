import { RiUpload2Line } from 'react-icons/ri';

export default function   Header  () {
    return(
        <header>
            <div className="container-fluid">
                <nav className="navbar  ">
                    <a className="navbar-brand  link-dark fs-2 fw-bold  " href="#home">Pixabay</a>
                    <ul className="nav navbar-list">
                        <li className="nav-item">
                            <a className="nav-link link-dark active" aria-current='page' href="#photos">Photos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-dark "  href="#illustration">Illustration</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-dark "  href="#vectors">Vectors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-dark "  href="#videos">Videos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-dark "  href="#music">Music</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-dark " href="#sound">Sound Effects</a>
                        </li>
                    </ul>
                    <ul className="nav ms-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link link-dark dropdown-toggle" href="#home" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Explore
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                                
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>    
                        </li>
                        <li className="nav-item  " >
                            <a className="nav-link link-dark  " href="#logIn">Log in</a>
                        </li>
                        <div className='separate'></div>
                        <li className="nav-item">
                            <a className="nav-link link-dark" href="join">Join</a>
                        </li>
                        <li>
                            <button className="btn btn-success rounded-pill">
                                <RiUpload2Line className='me-2' />
                                Upload
                            </button>
                        </li>
                    </ul>

                </nav>
            </div>
        </header>
    )
}