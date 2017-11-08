import React from 'react';
import PropTypes from 'prop-types';
import Config from '../../configs/config.js';

class ovalLabel extends React.Component {
  constructor(props) {
    super(props);
    this._checkClick = this._checkClick.bind(this);
    this._closeButtonClick = this._closeButtonClick.bind(this);
    this.state = {
      checked: this.props.isChecked
    };
  }

  componentWillMount() {
    const {
      marginTop,
      marginRight,
      height,
    } = this.props;

    this.style = {
      ovalLabelStyle: {
        marginTop: marginTop,
        marginRight: marginRight,
        cursor: 'pointer',
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
      },
      ovalStyle: {
        position: 'relative',
        padding: '0 14px',
        boxSizing: 'border-box',
        width: '100%',
        height: height,
        lineHeight: height,
        fontSize: '12px',
        boxShadow: '0 1px 2px 0 rgba(184,240,202,0.20)',
        border: '1px solid',
        borderRadius: '100px',
      },
      ovalStyleNoChecked: {
        color: '#727272',
        background: '#ffffff',
        borderColor: '#eeeeee',
      },
      ovalStyleChecked: {
        color: '#2ec75d',
        background: '#eefaf2',
        borderColor: '#b8f0ca',
      },
    };
  }

  _checkClick() {
    this.props.ovalLabelClick();
  }

  _closeButtonClick(e) {
    e.stopPropagation();
    this.props.closeButtonClick();
  }

  render() {
    const {
      isChecked,
    } = this.props;
    return (
      <div style = {this.style.ovalLabelStyle}>
        <div
          style = {isChecked
            ? Object.assign({},
              this.style.ovalStyle,
              this.style.ovalStyleChecked)
            : Object.assign({},
              this.style.ovalStyle,
              this.style.ovalStyleNoChecked)}
          onClick = {this._checkClick}>
          {this.props.labelName}
          {
            this.props.isShowClose
              ?<span
                style = {this.style.closeButton}
                onClick = {this._closeButtonClick}></span>
              : ''}
        </div>
      </div>
    );
  }
}

ovalLabel.propTypes = {
  labelName: PropTypes.string.isRequired,
  height: PropTypes.string,
  marginTop: PropTypes.string,
  marginRight: PropTypes.string,
  isChecked: PropTypes.bool.isRequired,
  isShowClose: PropTypes.bool,
  ovalLabelClick: PropTypes.func.isRequired,
  closeButtonClick: PropTypes.func,
};

ovalLabel.defaultProps = {
  height: '28px',
  marginTop: '12px',
  marginRight: '11px',
  isShowClose: false,
  closeButtonClick: () => {}
};

export default ovalLabel;
