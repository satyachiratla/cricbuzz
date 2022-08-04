import '../Cricket/Teamlist.css';
import Playerlist from './Playerlist';

const Teamlist = (props) => {

    const playerslist = props.teamlist

    const mumbaiIndians = playerslist[0].map(player => {
        return (
            <Playerlist key={player.id} name={player.name} type={player.type} />
        )
    })

    const chennaiSuperKings = playerslist[1].map(player => {
        return (
            <Playerlist key={player.id} name={player.name} type={player.type} />
        )
    })

    return (
        <div className='teamlist'>
            <div className='team'>
                <h1>Mumbai Indians</h1>
                <ul>
                {mumbaiIndians}
                </ul>
            </div>
            <div className='team'>
                <h1>Chennai Super Kings</h1>
                <ul>
                    {chennaiSuperKings}
                </ul>
            </div>
        </div>
    )
}

export default Teamlist;