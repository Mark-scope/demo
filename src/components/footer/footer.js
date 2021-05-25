import Button from '../button'
import footer from './footer.module.css'
import logo from '../../images/logo.png'

function Footer () {
    return(
        <div className={footer.main}>
            <div className={footer.logo}>
                < img src={logo} />
            </div>
            <div className={footer.info}>
                   <p>Powered by Impact Sphere</p>
            </div>
            <div className={footer.news}>
                    <input type='textaarea' placeholder='SignUp for Newsletter' />  
                    <Button text='Submit' className={footer.btn} />

            </div>
        </div>
    )
}
export default Footer;