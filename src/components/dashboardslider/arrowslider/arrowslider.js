import Arrowr from '../../../icons/arrow-right.png'
import arrow from './arrowslider.module.css'
import {useState} from 'react'


function Arrowslider(props) {
   
        return(
            <div className={arrow[props.style]} onClick={()=> props.setstyle('disable')}>

                    <div>

                    </div>
                    <div className={arrow.Arrow}>
                        <img src={Arrowr} className={arrow.Arrowr} type=''/>
                    </div>
                    <div>
                        
                    </div>
                </div>
        )
}
export default Arrowslider;
