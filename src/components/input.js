

function InputField ({label,type,placeholder,onchange,padding,paddin,margin,magin}){
    return(
        <div>
            <label style={{padding:paddin, margin:magin}} >{label}</label>
            <br/>
            <input 
            type={type} 
            placeholder={placeholder} 
            onChange={onchange}
            style={{padding:padding, margin:margin}} 
            className='form-field' />
        </div>
    )

}

export default InputField 