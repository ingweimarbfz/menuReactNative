import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";


const User = (props) => {
  const { firstName, lastName, age } = props;

  return (
    <Text> {firstName} {lastName}  {age} </Text>
  );
};

User.defaultProps = {
  firstName: "Weimar",
  lastName: "Barraza Florez",
  age: 28,
};

User.propTypes = {
  firstName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default User;
