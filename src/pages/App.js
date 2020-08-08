import React, { useState, useEffect } from "react";
import { Container, Header, Grid, Dimmer, Loader } from "semantic-ui-react";
import { SearchInput, SelectionList, CharacterDetail } from "../components";
import { connect } from "react-redux";
import {
  listAction,
  listFilterAction,
  selectedCharacterAction,
} from "../redux/actions";
const App = (props) => {
  // useEffect && useState
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  useEffect(() => {
    props.listAction();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    setList(
      props.list.filter(({ name }) => {
        return name.toLowerCase().includes(props.listFilter.toLowerCase());
      })
    );
  }, [props.listFilter, props.list]);

  // functions
  const searchHandler = (event) => {
    props.listFilterAction(search);
  };
  const searchbarChangeHandler = (event) => {
    setSearch(event.target.value);
  };
  const listItemSelectHandler = (selectedCharacter, event) => {
    props.selectedCharacterAction(selectedCharacter);
  };

  // Render
  return (
    <div className="main">
      <Container>
        <Dimmer active={props.list.length === 0}>
          <Loader size="huge" inverted />
        </Dimmer>
        <Header as="h1">Rick and Morty Characters</Header>
        <Grid columns="two">
          <Grid.Row>
            <Grid.Column width={6}>
              <SearchInput
                change={searchbarChangeHandler}
                value={search}
                click={searchHandler}
              />
              <div className="selectionList">
                <SelectionList items={list} click={listItemSelectHandler} />{" "}
                {list.length === 0 && "No matched character"}
              </div>
            </Grid.Column>
            <Grid.Column width={10}>
              <CharacterDetail />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { list: state.characterList, listFilter: state.characterListFilter };
};
const mapDispatchToProps = {
  listAction,
  listFilterAction,
  selectedCharacterAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
