import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
	return(
		<header className="header">
			<div className="container-fluid bg-primary text-white px-0">
			    <div className="container ">
			        
					<nav className="navbar navbar-expand-lg justify-content-lg-between">
					    <Link to="/" className="text-white text-decoration-none logo"><h3>ReTour Logo</h3></Link>
					    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					      <span className="navbar-toggler-icon"></span>
					    </button>
					    <div className="collapse navbar-collapse" id="navbarSupportedContent">
					      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
					        <li className="nav-item mx-1">
					          <Link to="/storelist" className="nav-link text-white font-weight-bold">Store List</Link>
					        </li>
					        <li className="nav-item mx-1">
					          <Link to="/tourlocator" className="nav-link text-white font-weight-bold">Tour Locator</Link>				          
					        </li>
					        <li className="nav-item dropdown mx-1">
					          <Link to="/" className="nav-link dropdown-toggle text-white font-weight-bold" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">System Pages</Link>
					          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">			          
					            <li><Link to="/" className="dropdown-item">System Page 1</Link></li>
					            <li><Link to="/" className="dropdown-item">System Page 2</Link></li>
					            <li><Link to="/" className="dropdown-item">System Page 3</Link></li>
					          </ul>
					        </li>
					        <li className="nav-item dropdown mx-1">
					          <Link to="/" className="nav-link dropdown-toggle text-white font-weight-bold" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">Layout Variants</Link>
					          <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
					            <li><Link to="/" className="dropdown-item">Layout Variant 1</Link></li>
					            <li><Link to="/" className="dropdown-item">Layout Variant 2</Link></li>
					            <li><Link to="/" className="dropdown-item">Layout Variant 3</Link></li>
					          </ul>
					        </li>
					        <li className="nav-item mx-1">
					          <Link to="/tutorials" className="nav-link text-white font-weight-bold">Tutorials</Link>
					        </li>
					        <li className="nav-item mx-1">
					          <button type="button" className="btn btn-warning"> + Submit a Tour</button>
					        </li>
					      </ul>
					    </div>
					  
					</nav>
				</div>
			</div>
		</header>	
	);
}

export default Navbar;