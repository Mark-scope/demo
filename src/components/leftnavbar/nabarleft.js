import Homeicon from '../../icons/15.png'
import FAV from '../../icons/favouritwes.png'
import Chngc from '../../icons/change-coure.png'
import Navleft from './navbarleft.module.css'

function  Navbarleft() {
    return(
        <div className={Navleft.left}>
        <div>
            <img src={Homeicon} type='' />
        </div>
        <div>
            <img src={FAV} type='' />
        </div>
        <div>
            <img src={Chngc} type='' />
        </div>
        <div>
            
        </div>
    </div>
    )    
}
export default Navbarleft;