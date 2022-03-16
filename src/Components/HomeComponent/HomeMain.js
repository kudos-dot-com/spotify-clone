
import React, { useEffect, useState,useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Container, Nav, NavDropdown } from "react-bootstrap";
import "./homemain.css";
import axios from 'axios'
import { Typography, CardMedia, CardContent, CardActionArea, Card } from "@material-ui/core";
import SpotifyWebApi from "spotify-web-api-js";
import initialState,{reducer} from "./Reducer";


const UseStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 345,
        width: "12rem",
        height: "15.5rem",
        backgroundColor: '#121212',
        boxShadow: '2px 6px 23px 0px rgba(0,0,0,0.75)'
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

    const spotify = new SpotifyWebApi();

    const [state,dispatch] = useReducer(reducer,initialState);

    const classes = UseStyles();
    const [greet, setgreet] = useState(' ');
    const [token, setToken] = useState('');
    const [category, setcategory] = useState([{}]);


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

    useEffect(() => {
        axios('https://accounts.spotify.com/api/token', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa('fe38b5c6ece347b28b592f7e96728201' + ':' + 'f2aa55e3ea0641c996f086d9b94e4846')
            },
            data: 'grant_type=client_credentials',
            method: 'POST'
        })
            .then(tokenResponse => {
                setToken(tokenResponse.data.access_token);
                //   console.log(token);
                axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
                    method: 'GET',
                    headers: { 'Authorization': 'Bearer ' + tokenResponse.data.access_token }
                })
                    .then(genreResponse => {

                        setcategory(genreResponse.data.categories.items);
                        // console.log(genreResponse);
                    });
                // console.log(category);
            });
    }, [category]);


    useEffect(() => {

        axios('https://accounts.spotify.com/api/token', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa('fe38b5c6ece347b28b592f7e96728201' + ':' + 'f2aa55e3ea0641c996f086d9b94e4846')
            },
            data: 'grant_type=client_credentials',
            method: 'POST'
        })
            .then(tokenResponse => {
                setToken(tokenResponse.data.access_token);
                spotify.setAccessToken(token);
                spotify.getAlbum("4aawyAB9vmqN3uQ7FjRGTy")
                .then((response) => {
                    response.tracks.items.map((item) => spotify.getTrack(item.id)
                    .then((track) => dispatch({type: "SET_TRACKS",tracks: state.album_tracks.push(track)})))
                    
            })
                .catch((err) => console.log(err));
            })
        
        console.log(state.album_tracks);
        
    }, [])


    return (
        <div style={{ background: "#1B1B1B", margin: "auto", overflowX: 'hidden' }}>
            <Container className="container_self">

               



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

                        {category.map((data) => {
                            return (
                                <>
                                    <div class="col-lg-3  col-md-3 col-sm-6 col-xs-6 my_col">
                                        <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.img}
                                                    component="img"
                                                    alt="Contemplative Reptile"
                                                    height="160"
                                                    image={data.name ? data.icons[0].url : ''}
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent className={classes.Cardcontent}>
                                                    <Typography gutterBottom variant="h6" component="h2" className={classes.card_head} >
                                                        {data.name}
                                                    </Typography>
                                                    <Typography variant="body2" component="p">
                                                        Lorem Ipsum is simply dummy text of the printing
                                         </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </div>
                                </>
                            );
                        })
                        }

                        {/*
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
                        */}


                    </div>
                </section>






            </Container >
        </div>
    );
}

export default HomeMain;
