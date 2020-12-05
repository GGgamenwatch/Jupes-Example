import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';



const Directory = () => (
    <React.Fragment>
        <Card className="text-center">
            <CardImg variant="top" src="../assets/macaw-yoga.jpg" />
            <CardBody>
                <CardTitle>Macaw Yoga Pants</CardTitle>
                <CardText>$100.00 USD</CardText>
                <Button variant="primary"><i className="fas fa-shopping-cart"> Add to Cart</i></Button>
            </CardBody>
        </Card>
        <Card className="text-center">
            <CardImg variant="top" src="../assets/watermelon-yoga.jpg" />
            <CardBody>
                <CardTitle>Watermelon Yoga Pants</CardTitle>
                <CardText>$80.00 USD</CardText>
                <Button variant="primary"><i className="fas fa-shopping-cart"> Add to Cart</i></Button>
            </CardBody>
        </Card>
    </React.Fragment>    
)

export default Directory;