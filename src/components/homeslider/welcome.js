import Compo from './welcome.module.css'
import Back from '../../video/back.mp4'

function WelcomeComponent() {
    return(
        <div className={Compo.slider1}>
                        <h3>Welcome Back..</h3>
                        <div className={Compo.slider2}>
                            <p>Continue previos sessions</p>
                            <video className={Compo.video1} autoPlay loop muted src={Back} type='video/mp4'/>
                        </div>
                            <p>Related sessions</p>
                        <div className={Compo.slider2}>
                            <video className={Compo.video1} autoPlay loop muted src={Back} type='video/mp4' />
                            <video className={Compo.video1} autoPlay loop muted src={Back} type='video/mp4'/>
                            <video className={Compo.video1} autoPlay loop muted src={Back} type='video/mp4'/>
                            <video className={Compo.video1} autoPlay loop muted src={Back} type='video/mp4'/>
                        </div>
                    </div>
    )
}
export default WelcomeComponent;