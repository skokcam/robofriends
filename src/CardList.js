import Card from './Card';
import { robots } from './robots';

const CardList = () => {
    const cardArray = robots.map( (robot, i) => {
        return(<Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />);
    })
    return (cardArray);
}

export  default CardList;