
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Container, Nav, NavDropdown } from "react-bootstrap";
import "./homemain.css";

import { Typography, CardMedia, CardContent, CardActionArea, Card } from "@material-ui/core";


const UseStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 345,
        width: "12rem",
        height: "15.5rem",
        backgroundColor: '#121212'
    },

    img: {
        padding: theme.spacing(.6)
    },

    card_head: {
        padding: "1px",
        marginBottom: "2px"
    },

    Cardcontent:
    {
        padding: "2px",
        color: "rgba(255, 255, 255, 0.877)",
        fontFamily: `'Cormorant', serif`
    },



}));



function HomeMain() {

    const classes = UseStyles();
    const [greet, setgreet] = useState(' ');


    var data = [
        [0, 4, "Hello Niharika Good night !"],
        [5, 12, "Hello Niharika Good morning !"],          //Store messages in an array
        [13, 16, "Hello Niharika Good afternoon !"],
        [17, 21, "Hello Niharika Good evening !"],
        [22, 24, "Hello Niharika Good night !"]
    ],
        hr = new Date().getHours();   // current date in 24 hrs format.



    useEffect(() => {
        hr = new Date().getHours();

        for (var i = 0; i < data.length; i++) {
            if (hr >= data[i][0] && hr <= data[i][1]) {
                console.log(data[i][2]);
                const Greating = data[i][2];
                setgreet(Greating);
            }
        }
    }, [])

    var username = "Niharika Dutta";

    return (
        <div style={{ background: "#1B1B1B", margin: "auto", overflowX: 'hidden' }}>
            <Container className="container_self">

                {/* ------------------    TOP BAR   ----------------------- */}
                <div class="d-flex bd-highlight top_bar ">

                    <div class="p-2 flex-grow-0 bd-highlight">
                        <Link to="/app"> <i className="arrow left"></i> </Link>
                    </div>

                    <div class="p-2 flex-grow-1 bd-highlight">
                        <Link to="/app/search"> <i className="arrow right"></i> </Link>
                    </div>

                    <div class="p-2 bd-highlight">
                        <section className=" Button">
                            <a className="Button-btn" href="/login"> Sign Up</a>
                        </section>
                    </div>

                    <div class="p-2 bd-highlight">
                        {username ?
                            (<NavDropdown title={username} id="username" className="navBig">
                                <i class="fas fa-user"></i>
                                <LinkContainer to='/account' >
                                    <NavDropdown.Item >Account </NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to='/profile' >
                                    <NavDropdown.Item > Profile </NavDropdown.Item>
                                </LinkContainer>

                                <NavDropdown.Item >Logout</NavDropdown.Item>
                            </NavDropdown>)
                            :
                            (<LinkContainer to="/login">
                                <Nav.Link className="navBig" >  Sign In {''}
                                    <i class="far fa-user"></i>
                                </Nav.Link>
                            </LinkContainer>)
                        }
                    </div>

                </div>



                <h2 className="Welcome" > {greet} </h2>

                <Row style={{ marginBottom: "7rem" }}>

                    <Col md={4} lg={4} xs={12} style={{ marginRight: "0px", paddingRight: "2rem" }}>
                        <div className="card myCard" style={{ backgroundColor: "#414B4E", marginRight: "-2px" }}>
                            <div className="card-horizontal" id="Hover_card" >
                                <div className="img-square-wrapper">
                                    <img
                                        className="card_img"
                                        src="https://images.unsplash.com/photo-1515871204537-49a5fe66a31f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                                        alt="Card image cap"
                                    />
                                </div>
                                <div className="card-body" id="Cardyy">
                                    {/* <h4 className="card-title">Card title</h4> */}
                                    <p className="card-text">
                                        Lorem Ipsum Text....{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={4} lg={4} xs={12} >
                        <div className="card myCard" style={{ backgroundColor: "#414B4E" }}>
                            <div className="card-horizontal" id="Hover_card" >
                                <div className="img-square-wrapper">
                                    <img
                                        className="card_img"
                                        src="https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvc2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                                        alt="Card image cap"
                                    />
                                </div>
                                <div className="card-body" id="Cardyy">
                                    {/* <h4 className="card-title">Card title</h4> */}
                                    <p className="card-text">
                                        Lorem Ipsum Text...to change dramatically.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={4} lg={4} xs={12} >
                        <div className="card myCard" style={{ backgroundColor: "#414B4E" }}>
                            <div className="card-horizontal" id="Hover_card">
                                <div className="img-square-wrapper">
                                    <img
                                        className="card_img"
                                        src="https://images.unsplash.com/photo-1515871204537-49a5fe66a31f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                                        alt="Card image cap"
                                    />
                                </div>
                                <div className="card-body" id="Cardyy">
                                    {/* <h4 className="card-title">Card title</h4> */}
                                    <p className="card-text">
                                        Lorem Ipsum Text... to change dramatically.
                                     </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>



                <section>
                    <h2 className="home_head">Recently Played</h2>

                    <div class="row row-col-4 text-center">
                        <div class="col-lg-3  col-md-3 col-sm-6 col-xs-6 my_col">
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.img}
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="160"
                                        image="https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvdmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent className={classes.Cardcontent}>
                                        <Typography gutterBottom variant="h6" component="h2" className={classes.card_head} >
                                            Lorem Ipsum
                                          </Typography>
                                        <Typography variant="body2" component="p">
                                            Lorem Ipsum is simply dummy text of the printing
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>

                        <div class="col-lg-3  col-md-3 col-sm-6 col-xs-6 my_col">
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.img}
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="160"
                                        image="https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvdmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent className={classes.Cardcontent}>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            Lorem Ipsum
                                          </Typography>
                                        <Typography variant="body2" component="p">
                                            Lorem Ipsum is simply dummy text of the printing
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>

                        <div class="col-lg-3  col-md-3 col-sm-6 col-xs-6 my_col">
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.img}
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="160"
                                        image="https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvdmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent className={classes.Cardcontent}>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            Lorem Ipsum
                                          </Typography>
                                        <Typography variant="body2" component="p">
                                            Lorem Ipsum is simply dummy text of the printing
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>

                        <div class="col-lg-3  col-md-3 col-sm-6 col-xs-6 my_col">
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.img}
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="160"
                                        image="https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvdmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent className={classes.Cardcontent}>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            Lorem Ipsum
                                          </Typography>
                                        <Typography variant="body2" component="p">
                                            Lorem Ipsum is simply dummy text of the printing
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>


                    </div>
                </section>






            </Container >
        </div>
    );
}

export default HomeMain;
