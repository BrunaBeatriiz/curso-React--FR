function Input (props){
    return (
        <input 
        className="input"
        // type={props.Input}
        // placeholder={props.placeholder}
        // value={props.value}
        // onCanPlay={props.onChange}
        {...props}
        //todas as props passadas para esse componente serão pelo input, serão utilizadas nesse input HTML.
         />
    )

}

export default Input;

//Caso seja necessário uma alteração nos Inputs será necessário atualizar apenas este componente, não um por um.