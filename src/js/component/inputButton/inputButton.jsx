import React from 'react';
// import PropTypes from 'prop-types';
import Input from '../input/input.jsx';
import Button from '../button/button.jsx';

class inputButton extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

    this.style = {
      inputButtonStyle: {
        display: 'flex',
        justifyContent: 'space-between',
      }
    };
  }

  render() {
    const isChange = true;

    return (
      <div style={this.style.inputButtonStyle}>
        <Input
          width = '366px'
          height = '29px'
        />
        <Button
          name = '确定'
          width = '66px'
          height = '28px'
          borderColor = {isChange ? '#00b03d' : '#dddddd'}
          backgroundColor = {isChange ? '#2ec75d' : 'r#eeeeeeed'}
          color = {isChange ? '#ffffff' : '#999999'}
          />
      </div>
    );
  }
}

inputButton.propTypes = {
};

export default inputButton;
