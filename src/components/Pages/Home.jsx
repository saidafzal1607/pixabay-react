import {FiSearch} from 'react-icons/fi';

export  const Home = () =>{
    return(
        <section id="photos">
            <div className="container-md  " >
                <div className="home__wrapper  d-flex justify-content-center align-items-center flex-column ">
                    <h1 className="home__title fw-bold ">Stunning free images & royalty free stock</h1>
                    <h2 className="home__subtitle fs-5 my-4">Over 2.5 million+ high quality stock images, videos and music shared by our talented community.</h2>
                    <div className=" d-flex align-items-center home__wrapper-search  bg-white rounded p-3  ">
                        <FiSearch  className='mx-2 search-icon fs-4'   />
                        <input className='search__input fs-5  ' placeholder='Search images, videos, vectors and music '/>
                        <div className=" dropdown ">
                            <a  className=" dropdown-toggle text-decoration-none text-muted " href="#toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Images
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark " aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#action">Action</a></li>
                                <li><a className="dropdown-item" href="#action">Another action</a></li>
                                <li  className="dropdown-divider"></li>
                                <li><a className="dropdown-item" href="#action">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                    <p className='home__min-text text-white-50'>
                        <span className=''>Popular Searches:</span>
                        <a className='link' href='#background'>background,</a>
                        <a className='link' href='#background'>wallpaper,</a>
                        <a className='link' href='#background'>nature,</a>
                        <a className='link' href='#background'>love,</a>
                        <a className='link' href='#background'>flowers,</a>
                        <a className='link' href='#background'>sky,</a>
                        <a className='link' href='#background'>dog,</a>
                        <a className='link' href='#background'>cat,</a>
                        <a className='link' href='#background'>caronavirus</a>
                    </p>
                    <a href='#pixels' className='home__footer-link '>
                        Free image by lucythomasphotography
                    </a>


                </div>

            </div>

        </section>
    )
}

