import profilecss from './profile.module.css'
import profileimage from '../../images/profile.jpg'


function Profileheader() {
    return(
        <div className={profilecss.body}>
                <div className={profilecss.profile_pic}>
                    <img src={profileimage} type='' />
                </div>
                <div className={profilecss.profile_info}>
                    <h1>Name</h1>
                    <h2>Occupation</h2>
                    <p>Describe yourself</p>
                </div>

        </div>
    )
}
export default Profileheader;