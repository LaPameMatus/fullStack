import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css';
import PropTypes from 'prop-types'
// import Cards from './Cards'


function Cardd({title,description,imageSource}) {
    return (
        <div className="card text-center">
            <Card style={{ width: '18rem' }}>
                <div className="overflow">
                <Card.Img variant="top" src={imageSource}  className="card-img-top"/>
                </div>                
                <Card.Body className="card-body">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="card-text">
                    {description}
                    </Card.Text>
                    <Button className='btn btn-outline-secondary rounded-0'>Comprar</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
Card.propTypes ={
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,


}

export default Cardd;