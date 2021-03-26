
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Row, Col, Container } from "react-bootstrap";
import "../../Styles/homemain.css";

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
    }

}));



function HomeMain() {
    const classes = UseStyles();

    return (
        <Container style={{}} className="container_self">
            <div>
                <h2 className="home_head">HOME</h2>

                {/* <Grid container> */}
                {/* <Grid item md={4} xs={12}> */}
                <Row style={{ marginBottom: "7rem" }}>

                    <Col md={4} lg={4} xs={12}>
                        <div className="card myCard">
                            <div className="card-horizontal">
                                <div className="img-square-wrapper">
                                    <img
                                        className="card_img"
                                        src="https://images.unsplash.com/photo-1548741487-18d363dc4469?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNob2NvbGF0ZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60"
                                        alt="Card image cap"
                                    />
                                </div>
                                <div className="card-body" id="Cardyy">
                                    {/* <h4 className="card-title">Card title</h4> */}
                                    <p className="card-text">
                                        Lorem Ipsum Text dramatically ...{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={4} lg={4} xs={12}>
                        <div className="card myCard">
                            <div className="card-horizontal">
                                <div className="img-square-wrapper">
                                    <img
                                        className="card_img"
                                        src="https://images.unsplash.com/photo-1548741487-18d363dc4469?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNob2NvbGF0ZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60"
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

                    <Col md={4} lg={4} xs={12}>
                        <div className="card myCard">
                            <div className="card-horizontal">
                                <div className="img-square-wrapper">
                                    <img
                                        className="card_img"
                                        src="https://images.unsplash.com/photo-1548741487-18d363dc4469?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNob2NvbGF0ZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60"
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

                    <div class="row row-cols-4 text-center">
                        <div class="col my_col">
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

                        <div class="col my_col">
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

                        <div class="col my_col">
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

                        <div class="col my_col">
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





            </div>
        </Container>
    );
}

export default HomeMain;
