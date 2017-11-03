import React from 'react';
import PropTypes from 'prop-types';
import Config from '../../configs/config.js';

class checkbox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {
      isChecked
    } = this.props;

    this.style = {
      checkboxStyle: {
        display: 'flex',
        alignItems: 'center',
        height: '12px',
        lineHeight: '12px',
        fontSize: '12px',
        color: '#323232',
      },
      checkbox: {
        display: 'block',
        marginRight: '6px',
        width: '12px',
        height: '12px',
        backgroundColor: isChecked ? '#2ec75d' : '',
        border: '1px solid',
        borderRadius: '2px',
        borderColor: isChecked ? '#12b845' : '#cccccc',
        backgroundImage: 'url(' + Config.imgUrl + 'checkMark.png)',
        backgroundSize: '8px 7px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }
    };
  }

  render() {

    return (
      <div style = {this.style.checkboxStyle}>
        <span style = {this.style.checkbox}></span>
        {this.props.name}
      </div>
    );
  }
}

checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

checkbox.defaultProps = {

};

export default checkbox;
