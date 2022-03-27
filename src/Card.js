import { robots } from './robots';
import './Card.css';
import 'tachyons';

//tachyon styles
//dib div
//br3 border 3
//pa3 padding 3
//ma2 margin 2
//grow : animation
//bw2 ??
//shadow-5 box-shadow 5

function Card(props) {
    const {id, name, email} = robots[props.index];
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?100x100`} />            
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;