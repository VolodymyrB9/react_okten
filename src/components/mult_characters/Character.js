
const Character = ({props}) => {
    return (
        <div>
            <h2>#{props.id} {props.name}</h2>
            <p>Status: {props.status} Species: {props.species} Gender: {props.gender}</p>
            <img src={props.image} alt={props.name}/>
            <hr/>
        </div>
    );
};

export default Character;