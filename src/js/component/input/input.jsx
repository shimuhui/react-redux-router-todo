import React from 'react';
import PropTypes from 'prop-types';

import './_input.scss';

class input extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {
      width,
      height,
      borderColor
    } = this.props;

    this.style = {
      inputStyle: {
        paddingLeft: '10px',
        paddingRight: '10px',
        boxSizing: 'border-box',
        width: width ? width : '362px',
        height: height ? height : '28px',
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

  _inputOnFocus() {
    this.setState({ focus: true });
  }

  _inputOnBlur() {
    this.setState({ focus: false });
  }

  render() {

    return (
      <div>
        <input
          type = "text"
          style = {this.style.inputStyle}
          id = {this.props.id}
          focus =
          onBlur = { ::this.inputOnBlur }
          onFocus = { ::this.inputOnFocus }/>
      </div>
    );
  }
}

input.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  borderColor: PropTypes.string,
  id: PropTypes.string
};

export default input;
