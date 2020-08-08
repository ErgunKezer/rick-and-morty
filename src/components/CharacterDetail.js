import React, { useState, useEffect } from "react";
import { Header, Image } from "semantic-ui-react";
import { connect } from "react-redux";
const CharacterDetail = (props) => {
  const [animation, setAnimation] = useState(true);
  const animationEndHandler = () => {
    setAnimation(false);
  };
  useEffect(() => {
    setAnimation(true);
  }, [props.character]);
  if (!props.character) {
    return (
      <div>
        <Header as="h2">No Character Selected</Header>
      </div>
    );
  }
  return (
    <div
      onAnimationEnd={() => animationEndHandler()}
      className={animation ? "detail animate" : "detail"}
    >
      <Image avatar src={props.character.image} circular size="medium" />
      <Header as="h2">{props.character.name}</Header>
      <div className="feature">
        <Header as="h6">Gender: </Header> {props.character.gender}
      </div>
      <div className="feature">
        <Header as="h6">Species: </Header> {props.character.species}
      </div>
      <div className="feature">
        <Header as="h6">Origin: </Header> {props.character.origin.name}
      </div>
      <div className="feature">
        <Header as="h6">Episodes: </Header>
        {props.character.episode.length}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    character: state.selectedCharacter,
  };
};

export default connect(mapStateToProps)(CharacterDetail);
