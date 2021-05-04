import sessioncss from './sessionprogress.module.css'
import Buttons from '../button'
import Button from '../button'
import Pic from '../../images/shata.jpg'
import ProgressBar from '../progressbar/progressbar'
import {useState} from 'react'

function SessionProgress() {

    const testData = [
            { bgcolor: "#567DD7", completed: 60 },
            { bgcolor: "#567DD7", completed: 30 },
            { bgcolor: "#567DD7", completed: 53 },
        
      ];


    
    return(
        <div className={sessioncss.body}>
                <div className={sessioncss.left}>
                    <div>
                        <Button text='B'/> <br/>
                        <Button text='S'/><br/>
                        <Button  text='M'/>
                    </div>
                    <div>
                        <h3>PROGRESS</h3>
                            {testData.map((item, idx) => (
                                <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                            ))}
                        <Button text='RESUME'/>                        
                    </div>
                </div>


                <div className={sessioncss.right}>
                    <div>
                        <h2>Shatta Wale</h2>
                        <h3>Dance Hall Artist</h3>
                        <h4>Musician</h4>
                        <p>Trainees 10k</p>
                    </div>
                    <div>
                        <img src={Pic} type='' />
                    </div>
                </div>

        </div>
    )
}
export default SessionProgress;