import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {
      width,
      height,
      borderColor,
      backgroundColor,
      color,
      fontSize,
    } = this.props;

    this.style = {
      buttonStyle: {
        width: width,
        height: height,
        lineHeight: height,
        textAlign: 'center',
        fontSize: fontSize,
        color: color,
        backgroundColor: backgroundColor,
        border: '1px solid',
        borderRadius: '3px',
        borderColor: borderColor,
        cursor: 'pointer',
      }
    };
  }

  render() {

    return (
      <div>
        <div
          style = {this.style.buttonStyle}
          onClick = {this.props.buttonClick}>{this.props.name}</div>
      </div>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  borderColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  buttonClick: PropTypes.func,
};

Button.defaultProps = {
  width: '98px',
  height: '34px',
  fontSize: '14px',
  buttonClick: () => {},
};

export default Button;
