import '../UI/card.css';

const card = (props) => {
    return (
        <div className='card'>{props.children}</div>
    )
}

export default card;