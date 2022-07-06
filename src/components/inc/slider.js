import React from 'react';
import BannerImg1 from '../images/banner-1.jpg';
import BannerImg2 from '../images/banner-2.jpg';
import BannerImg3 from '../images/banner-3.jpg';
import SearchIcon from '../images/search.png';
function Slider(){
	return (
		<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
		  <div className="carousel-inner">
		    <div className="carousel-item active">
		      <img src={BannerImg1} className="d-block w-100 h-100" alt="Banner" />
		    </div>
		    <div className="carousel-item">
		      <img src={BannerImg2} className="d-block w-100 h-100" alt="Banner" />
		    </div>
		    <div className="carousel-item">
		      <img src={BannerImg3} className="d-block w-100 h-100" alt="Banner" />
		    </div>
		  </div>
		  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
		    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		    <span className="visually-hidden">Previous</span>
		  </button>
		  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
		    <span className="carousel-control-next-icon" aria-hidden="true"></span>
		    <span className="visually-hidden">Next</span>
		  </button>

		  <div className="home-search-caption">
		  		<h1>Find <span className="text-warning">Adventures</span>, you want<br/> to talk about</h1>
		  		<div className="input-group add-on mt-3">
			      <input className="form-control py-2" placeholder="-> Search Tour" name="srch-term" id="srch-term" type="text" />
			      <div className="input-group-btn">
			        <button className="btn btn-secondary py-2" type="submit"><img src={SearchIcon} className="d-block w-100 h-100" alt="Search Icon" /></button>
			      </div>
			    </div>
		  </div>
		</div>
	);
}

export default Slider;