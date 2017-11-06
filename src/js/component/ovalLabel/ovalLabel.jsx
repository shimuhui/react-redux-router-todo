import React from 'react';
import PropTypes from 'prop-types';
import Config from '../../configs/config.js';
import './_ovalLabel.scss';

class ovalLabel extends React.Component {
  constructor(props) {
    super(props);
    this._checkClick = this._checkClick.bind(this);
    this.state = {
      checked: this.props.isChecked
    };
  }

  componentWillMount() {
  }

  _checkClick() {
    this.props.ovalLabelClick();
  }

  render() {
    const {
      marginTop,
      marginRight,
      height,
      isChecked,
    } = this.props;
    console.log(this.props.isChecked);

    return (
      <div style = {{
        marginRight: marginRight
      }}>
        <div
          className = 'ovalStyle'
          style = {{
            marginTop: marginTop,
            height: height,
            lineHeight: height,
            color: isChecked? '#2ec75d' : '#727272',
            background: isChecked ? '#eefaf2' : '#ffffff',
            borderColor: isChecked ? '#b8f0ca' : '#eeeeee',
          }}
          onClick = {this._checkClick}>
          {this.props.labelName}
          {
            this.props.isShowClose
              ?<span style = {styles.closeButton}></span>
              : ''}
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
  isChecked: PropTypes.bool.isRequired,
  isShowClose: PropTypes.bool,
  ovalLabelClick: PropTypes.func.isRequired,
};

ovalLabel.defaultProps = {
  height: '28px',
  isShowClose: false,
};

const styles = {
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

export default ovalLabel;
