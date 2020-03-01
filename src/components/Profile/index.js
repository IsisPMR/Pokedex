import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";


class Profile extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      <Container>
        {pokemons.map(p => (
          <Row>
            <Col md="6"></Col>
            <h2>Male / Female</h2>
            <Col md="6">
              <br></br>
              <ul>
                <li><h4>Name:{p.name}</h4></li>
              </ul>
            </Col>
            <div>
                <img alt={""} src={p.sprites.front_female} />
                <img alt={""} src={p.sprites.back_female} />
                <img alt={""} src={p.sprites.front_shiny_female} />
                <img alt={""} src={p.sprites.back_shiny_female} />
            </div>
            <div>
                <img alt={""} src={p.sprites.front_default} />
                <img alt={""} src={p.sprites.back_default} />
                <img alt={""} src={p.sprites.front_shiny} />
                <img alt={""} src={p.sprites.back_shiny} />
            </div>
          </Row>
        ))}
      </Container>
    );
  }
}
export default Profile;
