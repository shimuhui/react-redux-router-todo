import React from 'react';
import PropTypes from 'prop-types';

// import './_input.scss';

class input extends React.Component {
  constructor(props) {
    super(props);
    this._focus = this._focus.bind(this);
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
        width: width ? width : '362px',
        height: height ? height : '28px',
        color: '#323232',
        fontSize: '12px',
        background: '#ffffff',
        border: '1px solid',
        borderRadius: '2px',
        borderColor:
          borderColor
            ? borderColor
            : '#e0e0e0',
      }
    };
  }

  _focus(e) {
    e.target.style.borderColor = this.props.borderFocusColor;
  }

  _blur(e) {
    e.target.style.borderColor = this.style.inputStyle.borderColor;

    this.props.inputChange(this.myinput);
  }

  render() {

    return (
      <div>
        <input
          type = "text"
          ref={(input) => {this.myinput = input;}}
          style = {this.style.inputStyle}
          id = {this.props.id}
          onFocus = { (e) => { this._focus(e); } }
          onBlur = { (e) => { this._blur(e); } }/>
      </div>
    );
  }
}

input.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  borderColor: PropTypes.string,
  borderFocusColor: PropTypes.string,
  id: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  inputChange: PropTypes.func.isRequired,
};

input.defaultProps = {
  borderFocusColor: '#2ec75d',
  paddingLeft: '10px',
  paddingRight: '10px,'
};

export default input;
