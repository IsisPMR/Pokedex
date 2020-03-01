import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null
    };
  }
  render() {
    const { name, id, sprites } = this.props.pokemon;
    return (
      <Row>
        <Col md={8}>
          <img alt={name} src={sprites.front_default} />
        </Col>
        <Col md={4}>
          <ul>
            <li>Id: {id}</li>
            <li>Name: {name}</li>
            <li>
              <Button
                color="success"
                onClick={() => {
                  this.props.catchPokemon({
                    name,
                    id,
                    sprites
                  });
                }}
              >
                Catch!
              </Button>
            </li>
          </ul>
        </Col>
      </Row>
    );
  }
}

export default Pokemon;
