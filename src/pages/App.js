import React, { useState, useEffect } from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
import { SearchInput, SelectionList } from '../components';
import { connect } from 'react-redux';
import { rmListAction } from '../redux/actions';
const App = (props) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    props.rmListAction();
  }, []);
  const searchHandler = (event) => {
    console.log(event);
  };
  const searchbarChangeHandler = (event) => {
    setSearch(event.target.value);
  };
  const listItemSelectHandler = (selectedItem, event) => {
    console.log(selectedItem);
  };
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
                <SelectionList
                  items={props.list}
                  click={listItemSelectHandler}
                />
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
  return { list: state.rmListReducer };
};

export default connect(mapStateToProps, { rmListAction })(App);
