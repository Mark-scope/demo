import Nav from './navbar.module.css'
import logo from '../../images/logo.png'


function Navbar() {
    return(
        <div className={Nav.main}>
            <div className={Nav.logo}>
                < img src={logo} />
            </div>
            <div className={Nav.menus}>
                <button className={Nav.b}>Logout</button>
                <button className={Nav.but}>B</button>
                <button className={Nav.but}>S</button>
                <button className={Nav.but}>M</button>
            </div>
        </div>
    )
}
export default Navbar;