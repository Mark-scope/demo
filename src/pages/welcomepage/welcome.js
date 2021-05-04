import Navbar from '../../components/navbar/navbar'
import Wel from './welcome.module.css'
import WhatsNew from '../../components/whatsnew/whatsnew'
import BusinessIcon from '../../icons/business.png'
import skillicon from '../../icons/skills.png'
import MentorshipIcon from '../../icons/mentorship.png'
import Profile from '../../components/homeslider/profile'
import Footer from '../../components/footer/footer'

function WelcomePage() {
    
    return(
        <div className={Wel.body}>
            <Navbar />

            {/* top  */}
            <div className={Wel.v_header_container}>
                <div  className={Wel.header_content}>
                    <h1>Welcome ..... </h1>
                    <p>This is an online platform that helps in individuals to acquire skills and 
                    <br/> learn from the experience of professionals in theirfields of expertise.</p>
                    <h3 className={Wel.start}>Get Started</h3>
                </div>
            </div>

            {/* below */}
            <div className={Wel.below}>


                <div className={Wel.left}>

                    <Profile />

                    <div className={Wel.know}>

                    </div>

                    <div className={Wel.business}>
                            <div className={Wel.img}>
                                <img src={BusinessIcon} type=''/>
                            </div>
                            <div className={Wel.img_about}>
                                <h2>Business</h2>
                                <p>Do you want to start a business? How about learning the 
                                    skills, dos and don'ts of what ever business you want to start as well as the hardships
                                     from experts you choose to learn from. Start a session 
                                    to know the experience</p>
                                <button className={Wel.btn1}>Start Session</button>
                            </div>
                    </div>

                    <div className={Wel.business}>
                            <div className={Wel.img}>
                                <img src={skillicon} type=''/>
                            </div>
                            <div className={Wel.img_about}>
                                <h2>Skills</h2>
                                <p>Interested in learning a skill for a very long time or do you want learn something new for fun? How about
                                    learning it from top experts who can make you understand and easy to learn. Start a session 
                                    to know the experience</p>
                                <button className={Wel.btn1}>Start Session</button>
                            </div>
                    </div>

                    <div className={Wel.business}>
                            <div className={Wel.img}>
                                <img src={MentorshipIcon} type=''/>
                            </div>
                            <div className={Wel.img_about}>
                                <h2>Mentorship</h2>
                                <p>Are you at a dead end in your carr , you stake on a project or you you need professional help
                                    or advice on what to do in your professional life. How about listening experts talk about how
                                    they over came thiers or live sessins with them to know what to do in such times. Start a session 
                                    to know the experience</p>
                                <button className={Wel.btn1}>Start Session</button>
                            </div>
                    </div>
                    <div className={Wel.know1} />
                    

                </div>

                <WhatsNew />
                
            </div>
                <Footer />
        </div>
    )
}
export default WelcomePage;