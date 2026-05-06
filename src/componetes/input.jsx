function Input(props) {
    return (
        <input
            className="
        w-full 
        px-3 py-2 
        rounded-lg 
        border border-blue-200 
        text-slate-700
        placeholder:text-slate-400
        focus:outline-none
        focus:ring-1
        focus:ring-[#60A5FA]
        focus:border-[#60A5FA]
        hover:border-[#60A5FA]
        transition
      "
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