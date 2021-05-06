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

    const [showfieldexpert,setshowfieldexpert] = useState(true)
    const [showprogress, setshowprogress] = useState(false)
    const [shownotification, setshownotification] = useState(false)
    

    function initialstate () {
        setshowfieldexpert(true)
        setshowprogress(false)
        setshownotification(false)
    }
    function initialstate2 () {
        setshowfieldexpert(false)
        setshowprogress(true)
        setshownotification(false)
    }
    function initialstate3() {
        setshowfieldexpert(false)            
        setshowprogress(false)
        setshownotification(true)
    }

        return(
                <div className={Dash[props.rightstyle]}>
                <div className={Dash.righttop}>
                    <img src={Arrow} className={Dash.img1} onClick={props.setrightstyle} type=''  />
                    <div className={Dash.righttop1}>
                        <div><h3> img Name</h3></div>
                        <img src={progress} className={Dash.img} type='' onClick={initialstate}/>
                        <img src={vid} className={Dash.img} type='' onClick={initialstate2}/>
                        <img src={Not}  className={Dash.img} type='' onClick={initialstate3}/>
                    </div>

                </div>
                
                <div className={Dash.experts}>

                {showfieldexpert == true? 
                <div className={Dash.expert} >                        
                <div className={Dash.rightex}>
                    <h3>Field Experts</h3>
                </div>
                <Expert align='left' Name='Shatta Wale' Prefession='Musician' category='Dance hall artist' trained=' trainned 10k' profileimage={Sark} />
                </div>
                : null
                }
                   
                   {showprogress == true? 
                    <div >
                        <div className={Dash.rightex}>
                        <h3>Progress</h3>
                        </div>
                        <Progressfordash />
                    </div>: null}
                    
                    {shownotification == true? 
                    <div >
                        <div className={Dash.rightex}>
                        <h3>Notification</h3>
                        </div>
                    </div> : null}

                </div>
            </div>
        )
}
export default Dashright;
