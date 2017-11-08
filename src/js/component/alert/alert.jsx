import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button.jsx';
import Config from '../../configs/config.js';

class Alert extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

    this.style = {
      alertMain: {
        position: 'fixed',
        top: '315px',
        left: '50%',
        marginLeft: '-150px',
        width: '300px',
        height: '170px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 10px 0 rgba(0,0,0,0.20)',
        borderRadius: '2px',
      },
      alert: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
      },
      alertBg: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.24)',
      },
      title: {
        position: 'relative',
        paddingLeft: '20px',
        boxSizing: 'border-box',
        width: '100%',
        height: '40px',
        lineHeight: '40px',
        background: '#f5f5f5',
        color: '#727272',
        fontWeight: 'normal',
      },
      titleIcon: {
        display: 'block',
        position: 'absolute',
        top: '15px',
        right: '14px',
        width: '10px',
        height: '10px',
        backgroundImage: 'url(' + Config.imgUrl + 'alertClose.png)',
        backgroundSize: 'cover',
        cursor: 'pointer',
      },
      text: {
        margin: '30px 0',
        textAlign: 'center',
        lineHeight: '20px',
        color: '#323232'
      },
      textIcon: {
        display: 'inline-block',
        verticalAlign: 'top',
        marginRight: '10px',
        width: '20px',
        height: '20px',
        backgroundImage: 'url(' + Config.imgUrl + 'alertIcon.png)',
        backgroundSize: 'cover',
      },
      button: {
        marginLeft: '111px',
      }
    };
  }

  render() {
    const {
      alertText,
      closeClick,
    } = this.props;

    return (
      <div style = {this.style.alert}>
        <div
          style = {this.style.alertBg}></div>
        <div
          style = {this.style.alertMain}
          onClick = {this.props.closeClick}>
          <h4 style = {this.style.title}>
            提示
            <em
              style = {this.style.titleIcon}
              onClick = {closeClick}></em>
          </h4>
          <div style = {this.style.text}>
            <em style = {this.style.textIcon}></em>
            {alertText}
          </div>
          <div style = {this.style.button}>
            <Button
              name = '知道了'
              width = '76px'
              height = '28px'
              borderColor = '#00b03d'
              backgroundColor = '#2ec75d'
              color = '#ffffff'
              buttonClick = {closeClick}/>
          </div>
        </div>
      </div>
    );
  }
}

Alert.propTypes = {
  alertText: PropTypes.string.isRequired,
  closeClick: PropTypes.func,
};

Alert.defaultProps = {
  closeClick: () => {},
};

export default Alert;
