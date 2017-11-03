import React from 'react';
import PropTypes from 'prop-types';
import Config from '../../configs/config.js';

class ovalLabel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {
      marginTop,
      marginRight,
      height,
      isChoosed,
    } = this.props;

    this.style = {
      ovalStyle: {
        position: 'relative',
        padding: '0 14px',
        marginTop: marginTop,
        boxSizing: 'border-box',
        width: '100%',
        height: height ? height : '27px',
        lineHeight: height ? height : '27px',
        fontSize: '12px',
        color: isChoosed ? '#2ec75d' : '#727272',
        background: isChoosed ? '#eefaf2' : '#ffffff',
        boxShadow: '0 1px 2px 0 rgba(184,240,202,0.20)',
        border: '1px solid',
        borderRadius: '100px',
        borderColor: isChoosed ? '#b8f0ca' : '#eeeeee',
      },
      ovalLabelStyle: {
        marginRight: marginRight,
      },
      closeButton: {
        display: 'block',
        position: 'absolute',
        top: '-4px',
        right: '-4px',
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        backgroundColor: '#666666',
        backgroundImage: 'url(' + Config.imgUrl + 'close.png)',
        backgroundSize: '6px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }
    };
  }

  render() {

    return (
      <div style = {this.style.ovalLabelStyle}>
        <div
          style = {this.style.ovalStyle}>
          {this.props.labelName}
          <span style = {this.style.closeButton}></span>
        </div>
      </div>
    );
  }
}

ovalLabel.propTypes = {
  labelName: PropTypes.string.isRequired,
  height: PropTypes.string,
  marginTop: PropTypes.string.isRequired,
  marginRight: PropTypes.string.isRequired,
  isChoosed: PropTypes.bool.isRequired
};

export default ovalLabel;
