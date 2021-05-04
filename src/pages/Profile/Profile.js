import Navbar from '../../components/navbar/navbar'
import Profileheader from '../../components/profileheader/profileheader'
import Profilecss from './Profile.module.css'
import SessionProgress from '../../components/sessionprogress/sessionprogress'

function Profilepage() {
    return(
        <div className={Profilecss.body}>
            <Navbar />
            <Profileheader />
            <div className={Profilecss.progress}>
                <SessionProgress />
            </div>
            <h4>Go back to home page</h4>
        </div>
    )
}
export default Profilepage;