//import './Card.css';
//import 'tachyons';

//tachyon styles
//dib div
//br3 border 3
//pa3 padding 3
//ma2 margin 2
//grow : animation
//bw2 border-width: .25rem
//shadow-5 box-shadow 5

function Card({id, name, email}) {  
    const set = 4;  
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?set=set${set}&100x100`} />            
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;