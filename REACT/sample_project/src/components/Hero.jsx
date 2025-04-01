// import "./Hero.css"

import { Fragment } from "react"
import { Button, Card, Carousel, Col, Container, Image, Row } from "react-bootstrap"
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

const Hero = () => {
    // return <div className="text-danger fw-bold fs-1 text-uppercase">
    //     <button className="btn btn-primary">Click</button>
    //     <Button variant="dark" className="ms-2">Click Here</Button>
    // </div>
    return <Fragment>
        {/* <Carousel nextIcon={<FaRegArrowAltCircleRight size={30} color="rgb(255,23,43)" />} prevIcon={<FaRegArrowAltCircleLeft size={30} color="rgb(255,23,43)"/>}>
            <Carousel.Item interval={1000}>
                <Image className="w-100" height={"500px"} src="https://graphicsfamily.com/wp-content/uploads/edd/2022/12/Black-Friday-Sale-Ecommerce-Website-Banner-Design-1180x664.jpg"/>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <Image className="w-100" height={"500px"} src="https://img.freepik.com/free-psd/black-friday-super-sale-web-banner-template_120329-3861.jpg"/>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <Image className="w-100" height={"500px"} src="https://png.pngtree.com/template/20220319/ourmid/pngtree-outdoor-hiking-shoes-banner-pictures-image_877424.jpg"/>
            </Carousel.Item>
        </Carousel>

        <Image thumbnail className="m-3" style={{width: "18rem"}} src="https://suprememobiles.in/cdn/shop/files/mobiles.jpg" alt="mobile"/>
    
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://suprememobiles.in/cdn/shop/files/mobiles.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="success" className="w-100">Go somewhere</Button>
            </Card.Body>
        </Card> */}

        <Container fluid>
            <Row>
                <Col xs="12" sm="6" md="4" xl="3" xxl="2" className="bg-danger">1</Col>
                <Col xs="12" sm="6" md="4" xl="3" xxl="2" className="bg-success">1</Col>
                <Col xs="12" sm="6" md="4" xl="3" xxl="2" className="bg-primary">1</Col>
                <Col xs="12" sm="6" md="4" xl="3" xxl="2" className="bg-warning">1</Col>
                <Col xs="12" sm="6" md="4" xl="3" xxl="2" className="bg-dark">1</Col>
                <Col xs="12" sm="6" md="4" xl="3" xxl="2" className="bg-secondary">1</Col>
            </Row>
        </Container>
    
    </Fragment>
}

export default Hero