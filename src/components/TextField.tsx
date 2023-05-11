import '../style/textfield.css'


type TextFieldProps = {
    handleChange: (event:React.ChangeEvent<HTMLInputElement>)=>void
}

const TextField = (props: TextFieldProps)=>{
    return <input placeholder="Type here ..." onChange={props.handleChange}/>
}

export default TextField;