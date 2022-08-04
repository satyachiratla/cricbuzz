import '../Cricket/Playerlist.css';
import Addscoreform from './Addscoreform';

const Playerlist = (props) => {
    return (
        <li className='player'>
            <div>
                <h2>{props.name}</h2>
                <h3 className='type'>{props.type}</h3>
            </div>
            <div>
                <Addscoreform />
            </div>
        </li>
    )
}

export default Playerlist;