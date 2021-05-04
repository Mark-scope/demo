import expertcss from './experts.module.css'


function Expert({profileimage,Name,Prefession,category,trained,backcolor,btncolor}) {
    return(
        <div className={expertcss.body } style={{background:backcolor}}>
                <div className={expertcss.profile_info} >
                    <h2 >{Name}</h2>
                    <h3 >{Prefession}</h3>
                    <h4 >{category}</h4>
                    <p >{trained}</p>
                    <button style={{background:btncolor}}>Join session</button>
                </div>
                <div className={expertcss.profile_pic}>
                    <img src={profileimage} type='' />
                </div>

        </div>
    )
}
export default Expert;