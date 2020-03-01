import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import { Button } from "reactstrap";

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    console.log(pokemons.length);
    return (
      <Container>
        {pokemons.map(p => (
          <Row>
            <Col md="6">
              <img alt={p.name} src={p.sprites.front_default} />
              <img alt={p.name} src={p.sprites.back_default} />
            </Col>
            <Col md="6">
              <ul>
                <li>Id: {p.id}</li>
                <li>Name: {p.name}</li>
              </ul>
              <Button
                color="danger"
                onClick={() => {
                  var i = pokemons.indexOf(p);
                  pokemons.splice(i, 1);
                  console.log(pokemons);
                  console.log("Has borrado " + p.name);
                }}
              >
                Delete
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    );
  }
}

export default Pokedex;
