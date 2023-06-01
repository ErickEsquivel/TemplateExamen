
const Card = (props) => {
    return (
        <div>
            <h3>Hola {props.name}!!</h3>
            <h3>Sé que tu numero favorito es {props.number}</h3>
        </div>
    )
}

export default Card