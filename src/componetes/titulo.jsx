function Titulo (props){
    return(
        <h1 className="text-2xl font-semibold text-blue-900 text-center">
            {props.children}
        </h1>
    )
}

export default Titulo;