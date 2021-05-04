import Dash from './Dashboard.module.css'
import {useState} from 'react'
import Navbarleft from '../../components/leftnavbar/nabarleft'
import Dashright1 from '../../components/arrowslider/dashright1'
import Middle from '../../components/Middle'
import Dashright from '../../components/dashboardslider/Dashright'

function Dashboard(){

    const [style,setstyle]=useState('right1')

    const [rightstyle,setrightstyle]=useState('rightno')

    function toggle() {
        setstyle('disable')
        setrightstyle('right')
    }
    function togglemain() {
        setstyle('right1')
        setrightstyle('rightno')
    }

    return(
        <div className={Dash.body}>
            <Navbarleft />
            <Middle />
            <Dashright rightstyle={rightstyle}  setrightstyle={togglemain}/>
            <Dashright1 style={style} setstyle={toggle}/>
            
        </div>
    )
}
export default Dashboard;