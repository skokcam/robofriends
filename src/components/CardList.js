import Card from './Card';

const CardList = ({ robots }) => {
    const cardArray = robots.map( (robot, i) => {
        return(<Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />);
    })
    return (cardArray);
}

export  default CardList;