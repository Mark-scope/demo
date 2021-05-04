import Arrow from '../../icons/arrow.png'
import vid from '../../icons/videoclass.png'
import progress from '../../icons/progress.png'
import Not from '../../icons/notification.png'
import Dash from './dashright.module.css'
import Expert from '../experts/experts'
import Sark from '../../images/sarkodie.jpeg'
import Progressfordash from './progressfordash'
import {useState} from 'react'

function Dashright(props) {

    const [toggle,settoggle] = useState(true)

        return(
                <div className={Dash[props.rightstyle]}>
                <div className={Dash.righttop}>
                    <img src={Arrow} className={Dash.img1} onClick={props.setrightstyle} type=''  />
                    <div className={Dash.righttop1}>
                        <div><h3> img Name</h3></div>
                        <img src={progress} className={Dash.img} type='' />
                        <img src={vid} className={Dash.img} type='' />
                        <img src={Not}  className={Dash.img} type='' />
                    </div>

                </div>
                <div className={Dash.rightex}>
                    <h3>Field Experts</h3>
                </div>
                <div className={Dash.experts}>
                    <div >                        
                        <Expert align='left' Name='Shatta Wale' Prefession='Musician' category='Dance hall artist' trained=' trainned 10k' profileimage={Sark} />
                    </div>
                    <div>
                        <Progressfordash />
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        )
}
export default Dashright;
