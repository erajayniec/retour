import React from 'react';
import HomeSlider from '../inc/slider';
import TourImage from '../images/tower.jpg';
import Destination1 from '../images/destination1.jpg';


function Home(){
	return(
		<div className="container-fluid px-0">
			<HomeSlider />

			<div className="container my-5 required-cont">
				<div className="row">
				    <div className="col-12 mt-3">
				    	 <h3 className="font-weight-bold"><em><strong>Required</strong> </em> to Visit</h3>
				    </div>

				    <div className="col-12 mt-4">
				    	<div className="row">
				    	    <div className="col-lg-4 col-12 mb-5 mb-lg-0">
				    	    	<img src={TourImage} className="d-block w-100 h-100" alt="Search Icon" />
				    	    </div>
				    	    <div className="col-lg-8 col-12">
				    	        <div className="col-12">
				    	            <div className="row">
				    	                <div className="col-lg-4 col-12 mb-lg-0 mb-4">
							    	        <div className="card">
											  <img src={Destination1} className="card-img-top" alt="..." />
											  <div className="card-body">
											    <h5 className="card-title">Card title</h5>
											    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
											    
											  </div>
											</div>
										</div>
										<div className="col-lg-4 col-12 mb-lg-0 mb-4">
											<div className="card">
											  <img src={Destination1} className="card-img-top" alt="..." />
											  <div className="card-body">
											    <h5 className="card-title">Card title</h5>
											    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
											    
											  </div>
											</div>
										</div>
										<div className="col-lg-4 col-12 mb-lg-0 mb-4">
											<div className="card">
											  <img src={Destination1} className="card-img-top" alt="..." />
											  <div className="card-body">
											    <h5 className="card-title">Card title</h5>
											    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
											    
											  </div>
											</div>
										</div>
										<div className="col-lg-4 col-12 my-4 mb-lg-0 mb-4">
							    	        <div className="card">
											  <img src={Destination1} className="card-img-top" alt="..." />
											  <div className="card-body">
											    <h5 className="card-title">Card title</h5>
											    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
											    
											  </div>
											</div>
										</div>
										<div className="col-lg-4 col-12 my-4 mb-lg-0 mb-4">
											<div className="card">
											  <img src={Destination1} className="card-img-top" alt="..." />
											  <div className="card-body">
											    <h5 className="card-title">Card title</h5>
											    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
											    
											  </div>
											</div>
										</div>
										<div className="col-lg-4 col-12 my-4 mb-lg-0 mb-4">
											<div className="card">
											  <img src={Destination1} className="card-img-top" alt="..." />
											  <div className="card-body">
											    <h5 className="card-title">Card title</h5>
											    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
											    
											  </div>
											</div>
										</div>
									</div>
								</div>
				    	    </div>
				    	</div>
				    </div>
				</div>
			</div>

		</div>
	);
}

export default Home;