import Arrowr from '../../icons/arrow-right.png'
import dash from './dashright1.module.css'
import {useState} from 'react'


function Dashright1(props) {
   
        return(
            <div className={dash[props.style]} onClick={()=> props.setstyle('disable')}>

                    <div>

                    </div>
                    <div className={dash.Arrow}>
                        <img src={Arrowr} className={dash.Arrowr} type=''/>
                    </div>
                    <div>
                        
                    </div>
                </div>
        )
}
export default Dashright1;
