import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
export default function Profile() {
    return(
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>

                    <div className='profile-picture mb-5'>
                        <div className='profile-picture-background'>

                        </div>
                    </div>
                    <div className='profile-details-name mt-3 mb-3'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Ichsan</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {""}
                            <h1>
                                {""}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Front End Dev 📱",
                                    1000,
                                    "React & Native Dev 💙",
                                    1000,
                                    "Vue JS Dev 💚",
                                    1000,
                                ]}
                                />    
                            </h1>
                            <div className='colz mt-5 mb-5'>
                                <div className='colz-icon'>
                                    <a href='https://github.com/ichsan2706' target="_blank">
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href='https://www.linkedin.com/in/muhammad-ichsan-rosaldi-663a5a176/' target="_blank">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                    <a href='https://wa.me/6281282983041' target="_blank">
                                        <i class="fab fa-whatsapp"></i>
                                    </a>
                                </div>
                            </div>
                            <span className='profile-role-tagline'>
                                I'm building website and mobile apps using React or Vue
                            </span>
                        </span>
                        <div className='profile-options mt-5 mb-5'>
                            
                            <a href='https://wa.me/6281282983041' target="_blank" className="text-white">
                                <button className='btn primary-btn text-white'>Hire me</button>
                            </a>
                            
                            {/* <a href='ichsancv.pdf' download="ichsan-cv.pdf">
                                <button className='btn highlighted-btn text-white'>Get Resume</button>
                            </a> */}
                            <a href="cv.pdf" download>
                                <button className='btn highlighted-btn text-white'>Get Resume</button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}