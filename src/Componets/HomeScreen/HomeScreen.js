import React from 'react'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <div class="w3l-banner-content">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 bannerhny-info pr-lg-5">
          <h3 class="mb-4">Welcome to Qubators <span class="w3sub-color">
               APP </span>SUBMISSION.</h3>
          <div class="separatorhny"></div>
          <p class="pr-lg-5 mt-md-4 mt-3">Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi vitae sit.Ea
            ipsum sed consequuntur illum facere.
          </p>
             <div>
                           <Link to = "/register">    <a class="btn btn-style mt-sm-5 mt-4 mr-2" >
                             INOVATOR</a></Link>
                            <Link to ='/signin'>   <a class="btn btn-style mt-sm-5 mt-4 mr-2" >  BDM</a></Link>
           
             </div>
        </div>
        <div class="col-lg-6 bannerhny-info-img mt-lg-0 mt-5 pl-lg-5">
          <img src="assets/images/pic-1.png" alt="" class="img-fluid"/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomeScreen