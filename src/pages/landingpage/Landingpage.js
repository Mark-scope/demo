import Button from '../../components/button'
import Landing from './landing.module.css'
import { useAppContext } from '../../store/context';
import Logo from '../../images/2.png'


function Landingpage(){

    const{goTopage}=useAppContext()
 console.log(goTopage)
    return(
        <div className = {Landing.main}>
            <div className = {Landing.left}>
                <h1 className = {Landing.h1}>IMPACT SPHERE</h1>
                <p className = {Landing.h3}>Have you ever wanted to learn a skill, know the experiece of<br/> experts in their field of work
                    or do you need coaching or <br/>mentorship in what you do ? <br /> 
                    Sign up to enjoy our user experience
                </p>
                <Button text='Sign Up' onClick={() => goTopage('/signup')} />
                <Button text='Login'onClick={() => goTopage('/signup')} />
            </div>
            <div className ={Landing.right}>
                <img src={Logo} />
                    
            </div>

        </div>
    )
}
export default Landingpage;