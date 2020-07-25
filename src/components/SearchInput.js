import React from 'react';
import { Input } from 'semantic-ui-react';

const SearchInput = (props) => {
  const { change, click, value } = props;
  return (
    <Input
      className='searchInput-bar'
      focus
      placeholder='Search'
      value={value}
      onChange={change.bind(this)}
      action={{ icon: 'search', onClick: click.bind(this) }}
    />
  );
};

export default SearchInput;
