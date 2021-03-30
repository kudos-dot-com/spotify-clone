
import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, NavDropdown } from "react-bootstrap";
import "../../index.css";



const Top_Horizontal_bar = () => {

    var username = "Niharika Dutta";

    return (

        <div style={{ background: "#1B1B1B", margin: "auto", overflowX: 'hidden' }}>
            <Container className="container_self_forhorizonBar">

                {/* ------------------    TOP NAV BAR   ----------------------- */}
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
            </Container>
        </div>
    )
}

export default Top_Horizontal_bar;













