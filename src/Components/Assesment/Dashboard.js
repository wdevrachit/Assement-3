import React from 'react'
import { useNavigate } from "react-router-dom"

function Dashboard() {

    const navigate = useNavigate()
  return (
    <>
    <div className="row">
        <nav class="navbar bg-light">
            <div class="container-fluid">
            <h1 class="navbar-brand">BookStore</h1>
            <form class="d-flex" role="search">
            <button class="btn btn-primary" onClick = {()=>navigate('/booklist')}>Shop More!</button>
            <button className= "btn btn-danger" onClick = {()=>navigate('/')} >Log Out</button>
            </form>
            </div>
        </nav>
                <div className="col-md-4">
                    <div class="card">
                    
                    <div class="card-body">
                        <h5 class="card-title">Admin</h5>
                        <hr></hr>
                        <p class="card-text">Place: Norway</p>
                        <hr></hr>
                       
                        <p class="card-text">Phone: 8579624863</p>
                        <hr></hr>
                        
                    </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <h3>Recent Purchases</h3>
                    <div class="card">
                        <h5 class="card-header">Atomic Habits</h5>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834/ref=asc_df_1847941834/?tag=googleshopdes-21&linkCode=df0&hvadid=396987849297&hvpos=&hvnetw=g&hvrand=9584005028319457031&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9302611&hvtargid=pla-551566274852&psc=1&ext_vrnc=hi" class="btn btn-primary">View More</a>
                        </div>
                    </div>
                    <div class="card">
                        <h5 class="card-header">Deep work</h5>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">View More</a>
                        </div>
                    </div>
                    <h3>Wish List</h3>
                    <div class="card">
                        <h5 class="card-header">Think and Grow Rich</h5>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">View More</a>
                        </div>
                    </div>
                    <div class="card">
                        <h5 class="card-header">Rich Dad Poor Dad</h5>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">View More</a>
                        </div>
                    </div>

                </div>
            </div>        
    
    
    </>
  )
}

export default Dashboard