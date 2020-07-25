import React, { useState, useEffect } from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
import { SearchInput, SelectionList } from '../components';
import { connect } from 'react-redux';
import { listAction, listFilterAction } from '../redux/actions';
const App = (props) => {
  // useEffect && useState
  const [search, setSearch] = useState('');
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
  const listItemSelectHandler = (selectedItem, event) => {
    console.log(selectedItem);
  };

  // Render
  return (
    <div className='main'>
      <Container>
        <Header as='h2'>Rick and Morty Characters</Header>
        <Grid columns='two'>
          <Grid.Row>
            <Grid.Column width={6}>
              <SearchInput
                change={searchbarChangeHandler}
                value={search}
                click={searchHandler}
              />
              <div className='selectionList'>
                <SelectionList items={list} click={listItemSelectHandler} />{' '}
                {list.length === 0 && 'No matched character'}
              </div>
            </Grid.Column>
            <Grid.Column width={10}>
              <SearchInput
                change={searchbarChangeHandler}
                value={search}
                click={searchHandler}
              />{' '}
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
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
