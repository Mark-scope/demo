import InputField from '../../components/input'
import Button from '../../components/button'
import { useState } from "react"
import Sign from './signup.module.css'
import { useAppContext } from '../../store/context';


function SignUp(){

    const{goTopage}=useAppContext()

    const [values, setvalues] = useState({})
    const changevalue = (e) => {
        setvalues ({...values, [e.target.label]: e.target.value})
    }

    function submit(e){
        e.preventDefault();
      
        fetch('http://localhost:5000/api/v1/signup', 
        {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then(response => response.json())
        .then(responseData => {
          console.log(responseData);
        })
    }

    const [toggle,settoggle] = useState(true)

    return(
        <div className={Sign.main}>

            {/* signup */}
            <div className={toggle === true ? Sign.signupformopen: Sign.signupformclosed} >            
                <div className={Sign.left}>
                    <h1>Welcome To I.S</h1>
                    <h4>Enter your details to start <br/>your journey with us</h4>
                    <Button text='Login'  onClick={()=>{settoggle(false)}}/>
                </div>
                <div className={Sign.right}>
                    <div className={Sign.bac}>
                        <InputField  label='Name' margin='0px 0px 20px 0px' paddin='0px 0px 0px 10px' padding='13px 90px' placeholder='First and Last name' type='text' onchange={changevalue} />
                        <InputField label='Email' margin='0px 0px 20px 0px' paddin='0px 0px 0px 10px' padding='13px 90px' placeholder='<name>@gmail.com' type='email' onchange={changevalue} />
                        <InputField label='Password' margin='0px 0px 20px 0px' paddin='0px 0px 0px 10px' padding='13px 90px' placeholder='' type='password' onchange={changevalue} />
                        <Button text='Sign Up' onKeyUp={submit} onClick={submit} />
                    </div>
                </div>                
            </div>

            

            {/* login */}
            <div className={toggle === false ? Sign.loginformopen : Sign.loginformclosed}>           
                
                <div className={Sign.right}>
                    <div className={Sign.bac}>
                        <InputField label='Email' magin='0px 0px 5px 0px' margin='0px 0px 20px 0px' paddin='0px 0px 0px 10px' padding='13px 90px' placeholder='<name>@gmail.com' type='email' onchange={changevalue} />
                        <InputField label='Password' margin='0px 0px 20px 0px' paddin='0px 0px 0px 10px' padding='13px 90px' placeholder='Confirm' type='password' onchange={changevalue} />
                        <Button text='Login' onKeyUp={submit} onClick={submit} />
                    </div>
                </div>

                <div className={Sign.left1}>
                    <h1>Welcome back</h1>
                    <h4>Enter your details to resume <br/>your journey with us</h4>
                    <Button text='Sign Up'  onClick={()=>{settoggle(true)}} />                    
                </div>

            </div>
        </div>

        

    )
}

export default SignUp;
