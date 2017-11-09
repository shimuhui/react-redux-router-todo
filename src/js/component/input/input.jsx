import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    const {
      width,
      height,
      borderColor,
      paddingLeft,
      paddingRight,
    } = this.props;

    this.style = {
      inputStyle: {
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        boxSizing: 'border-box',
        width: width,
        height: height,
        color: '#323232',
        fontSize: '12px',
        background: '#ffffff',
        border: '1px solid',
        borderRadius: '2px',
        borderColor: borderColor,
      }
    };
  }

  _focus(e) {
    e.target.style.borderColor = this.props.borderFocusColor;
  }

  _blur(e) {
    e.target.style.borderColor = this.style.inputStyle.borderColor;
  }

  _onChange(id) {
    let obj = {};
    obj[id] = this.myinput.value;
    console.log(obj);
    this.props.getInputValue(obj);
  }

  render() {
    const {
      id,
      value,
      disabled,
      defaultValue,
    } = this.props;

    return (
      <div>
        <input
          type = "text"
          ref={(input) => {this.myinput = input;}}
          style = {this.style.inputStyle}
          id = {id}
          disabled = {disabled}
          placeholder = {defaultValue}
          value = {value}
          onFocus = { (e) => { this._focus(e); } }
          onBlur = { (e) => { this._blur(e); } }
          onChange = {() => { this._onChange(id);}}/>
      </div>
    );
  }
}

Input.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  borderColor: PropTypes.string,
  borderFocusColor: PropTypes.string,
  id: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  getInputValue: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
};

Input.defaultProps = {
  value: '',
  borderFocusColor: '#2ec75d',
  paddingLeft: '10px',
  paddingRight: '10px',
  width: '362px',
  height: '28px',
  borderColor: '#e0e0e0',
  disabled: false,
  defaultValue: '',
  getInputValue: () => {},
};

export default Input;
