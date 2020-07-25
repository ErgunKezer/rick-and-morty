import React from 'react';
import { Image, List } from 'semantic-ui-react';

const SelectionList = (props) => {
  const items = props.items.map((item) => {
    return (
      <List.Item key={item.id} onClick={props.click.bind(this, item)}>
        <Image avatar src={item.image} />
        <List.Content>
          <List.Header>{item.name}</List.Header>
        </List.Content>
      </List.Item>
    );
  });
  return (
    <List selection divided verticalAlign='middle'>
      {items}
    </List>
  );
};

export default SelectionList;
