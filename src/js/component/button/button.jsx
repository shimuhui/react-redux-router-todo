import React from 'react';
import PropTypes from 'prop-types';

class input extends React.Component {
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
      }
    };
  }

  render() {

    return (
      <div>
        <div style = {this.style.buttonStyle}>{this.props.name}</div>
      </div>
    );
  }
}

input.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  borderColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

input.defaultProps = {
  width: '98px',
  height: '34px',
  fontSize: '14px',
};

export default input;
