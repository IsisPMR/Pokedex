import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  Button,
  Alert
} from "reactstrap";
import * as yup from "yup";
import { getPokemon } from "../../services/pokemonService";
import Pokemon from "./Pokemon";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isNameValid: true,
      pokemon: null,
      pokemonExists: true
    };
  }

  onChange = e => {
    const name = e.target.value;
    this.setState({ name });
  };

  onClick = async e => {
    e.preventDefault();
    const { name: poke } = this.state;
    let shcema = yup.object().shape({
      pokemon: yup
        .string()
        .min(3)
        .required()
    });
    const isValid = await shcema.isValid({ pokemon: poke });

    this.setState({
      isNameValid: isValid,
      pokemonExists: true
    });

    if (!isValid) return;

    let state = {};
    try {
      const { data } = await getPokemon(poke);
      state = {
        pokemonExists: true,
        pokemon: data
      };
    } catch (err) {
      state.pokemonExists = false;
    }
    this.setState(state);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col m="12">
            <Form>
              <FormGroup>
                <Label for="pokemon">Pokemon a buscar: </Label>
                <Input
                  type="text"
                  name="pokemon"
                  placeholder="pokemon name"
                  value={this.state.name}
                  onChange={this.onChange}
                  invalid={!this.state.isNameValid}
                />
                {this.state.pokemonExists === false ? (
                  <Alert color="danger">Oh no! El pokemon no existe </Alert>
                ) : null}
                <Button color="primary" size="lg" block onClick={this.onClick}>
                  Buscar
                </Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        {this.state.pokemon && (
          <Pokemon
            pokemon={this.state.pokemon}
            catchPokemon={this.props.catchPokemon}
          />
        )}
      </Container>
    );
  }
}

export default Search;
