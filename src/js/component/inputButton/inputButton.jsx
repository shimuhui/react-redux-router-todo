import React from 'react';
import PropTypes from 'prop-types';
import Input from '../input/input.jsx';
import Button from '../button/button.jsx';

class InputButton extends React.Component {
  constructor(props) {
    super(props);
    this._inputChange = this._inputChange.bind(this);
    this._buttonClick = this._buttonClick.bind(this);
    this.state = {
      inputValue: '',
    };
  }

  componentWillMount() {

    this.style = {
      inputButtonStyle: {
        display: 'flex',
        justifyContent: 'space-between',
      }
    };
  }

  _buttonClick() {
    this.setState({
      inputValue: '',
    });
    this.props.buttonClick(this.state.inputValue);
  }

  _inputChange(value) {
    this.setState({
      inputValue: value[this.props.id],
    });
  }

  render() {
    const isChange = true;

    return (
      <div style={this.style.inputButtonStyle}>
        <Input
          id = {this.props.id}
          width = '366px'
          height = '29px'
          value = {this.state.inputValue}
          getInputValue = {this._inputChange}
          isEmptyValue = {this.state.isEmptyValue}
        />
        <Button
          name = '确定'
          width = '66px'
          height = '28px'
          borderColor = {isChange ? '#00b03d' : '#dddddd'}
          backgroundColor = {isChange ? '#2ec75d' : 'r#eeeeeeed'}
          color = {isChange ? '#ffffff' : '#999999'}
          buttonClick = {this._buttonClick}
          />
      </div>
    );
  }
}

InputButton.propTypes = {
  buttonClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default InputButton;
