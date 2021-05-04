import Navbar from '../../components/navbar/navbar'
import home from './home.module.css'
import WhatsNew from '../../components/whatsnew/whatsnew'
import WelcomeComponent from '../../components/homeslider/welcome'
import Profile from '../../components/homeslider/profile'
import Footer from '../../components/footer/footer'
import {useState} from 'react'



function HomePage() {
    
    return(
        <div className={home.body}>
            <Navbar />


            {/* below */}
            <div className={home.below}>
                <div className={home.left}> 
                    <div className={home.welcome}>
                        <WelcomeComponent />
                    </div>
                    <div className={home.profile}>
                        <Profile />     
                    </div>                
                    <div className={home.know}>

                    </div>

                    <div className={home.business1}>
                            <div className={home.img}>
                                image
                            </div>
                            <div className={home.img_about}>
                                <h2>Business</h2>
                                <p>Do you want to start a business? How about learning the 
                                    skills, dos and don'ts of what ever business you want to start as well as the hardships
                                     from experts you choose to learn from. Start a session 
                                    to know the experience</p>
                                <button className={home.btn1}>Start Session</button>
                            </div>
                    </div>
                   
                    
                </div>
                <WhatsNew />
            </div>
                <Footer />
        </div>
    )
}
export default HomePage;