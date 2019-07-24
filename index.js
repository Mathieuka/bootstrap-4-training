// index.js
import React from 'react';
import { render } from 'react-dom';

import { Row, Col, Container } from "react-bootstrap";

import NoWidthSpecifed from "./src/components/noWidthSpecifed";

class App extends React.Component{

    render(){
        return(
           
            <Container>
                {/********BASIC********/}
                <Row>
                   <Col>col 1 of 2</Col>
                   <Col>col 2 of 2</Col>
               </Row>
               <Row>
                   <Col>col 1 of 3</Col>
                   <Col>col 2 of 3</Col>
                   <Col>col 3 of 3</Col>
               </Row>
               <div className="bg-warning"><span className="text-danger">separation</span></div>
               {/********RESIZE ONLY THE COLUMN OF THE MIDDLE**********/}
               <Row>
                   <Col>col 1 of 3</Col>
                   <Col className="bg-danger" xs={2}>col 2 of 3 (wider)</Col>
                   <Col>col 3 of 3</Col>
               </Row>
               <Row>
                   <Col>col1 of 3</Col>
                   <Col className="bg-danger" xs={5}>col 2 of 3 (wider)</Col>
                   <Col className="bg-info" xs={2}>col 3 of 3</Col>
               </Row>
               <div className="bg-warning"><span className="text-danger">separation</span></div>
               {/********BOOTSTRAP MOBILE FIRST & VARIABLE WITH CONTENT**********/}
               <Row className="justify-content-md-center">
                    <Col xs={"1"} sm={"7"} md={"10"} className="bg-danger">
                        col 1 of 3
                    </Col>
                    <Col md="auto" >
                        col 2 of 3
                    </Col>
                    {/* xs alone like that, mean take all width when is "xs" mode size so less then < 576 px */}
                    <Col xs lg="2" className="bg-info">
                        col 3 of 3
                    </Col>
               </Row>
               <Row>
                   <Col>
                       col 1 of 3
                   </Col>
                   <Col md="auto" className="bg-danger">
                        Variable with content
                   </Col>
                   <Col xs lg={2}>
                       col 3 of 3
                   </Col>
               </Row>
                <div className="bg-warning"><span className="text-danger">separation</span></div>
                <Row>
                    <Col xs={"8"} className="bg-danger">
                        col 1 of 2
                    </Col>
                    <Col xs={"4"}>
                        col 2 of 2
                    </Col>
                </Row>
                <Row>
                    <Col sm className="bg-danger">
                        sm="true"
                    </Col>
                    <Col sm className="bg-info">
                        sm="true"
                    </Col>
                    <Col sm className="bg-danger">
                        sm="true"
                    </Col>
                </Row>
                <div className="bg-warning"><span className="text-danger">separation</span></div>
                {/* multi break point for responsiveness */}
                <Row>
                    <Col xs={3} md={8} lg={12} className="bg-danger">
                        col 1 of 2
                    </Col>
                </Row>
                <div className="bg-warning"><span className="text-danger">separation</span></div>
                {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                <Row className="justify-content-md-center">
                    <Col xs={6} md={3} className="bg-danger">
                        col 1 of 3
                    </Col>
                    <Col xs={6} md={3} className="bg-info">
                        col 2 of 3
                    </Col>
                    <Col xs={6} md={3} className="bg-danger">
                        col 3 of 3
                    </Col>
                </Row>
                <div className="bg-warning"><span className="text-danger">separation</span></div>
                {/* Columns are always 50% wide, on mobile and desktop */}
                <Row>
                    <Col sm={6} md={10} className="bg-info">xs=6</Col>
                    <Col xs={6}>xs=6</Col>
                </Row>
                <div className="bg-warning"><span className="text-danger">separation</span></div>
                {/* Change the order of the component */}
                <Row>
                    <Col xs >First, but unordered</Col>
                    <Col xs={{ order: 12 }}>Second, but last</Col>
                    <Col xs={{ order: 1 }} className="bg-info">Third, but second</Col>
                </Row>
                 <div className="bg-warning"><span className="text-danger">separation</span></div>
                 {/* offset create an empty offset */}
                 <Row>
                    <Col md={4} className="bg-info">md=4</Col>
                    <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
                </Row>
                <Row>
                    <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
                    <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
                </Row>
            </Container>
        )
    }
}

render(
      <App/>,
      document.getElementById('root')
  )
  













