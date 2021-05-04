import Prof from './profile.module.css'
import profpic from '../../icons/POFILE.png'

function Profile(props) {


    return(
        <div className={Prof.slider}>
        <h3>PROFILE</h3>
        <div className={Prof.info}>
            <div className={Prof.propic}>
                <img src={profpic}  type='' />
            </div>
            <div className={Prof.about}>
                <h2>Name</h2>
                <p>Occupation</p>
                <p>Describe your self</p>
                <button className={Prof.btn}>Edit</button>
            </div>                           
        </div>
    </div>

    )
}
export default Profile;