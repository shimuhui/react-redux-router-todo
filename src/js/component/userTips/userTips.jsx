import React, {Component} from 'react';
import './userTips.scss';
import PropTypes from 'prop-types';

class UserTips extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {
      width,
      height,
      top,
      left,
      fontSize,
      color,
      iconWidth,
      iconHeignt,
      tipheight,
    } = this.props;

    this.styles = {
      userTips: {
        width: width,
        height: height,
        position: 'absolute',
        top: top,
        left: left,
        marginLeft: '-' + width/2 + 'px',
        color: color,
        fontSize: fontSize
      },
      icon: {
        display: 'block',
        width: iconWidth,
        height: iconHeignt,
        margin: '0 auto',
        marginBottom: 14 + 'px',
      },
      tipInfo: {
        height: tipheight,
        width: 'auto'
      }
    };
  }

  render() {
    return <div
      className = {
        this.props.tipShow ? 'toggleClass1' : 'toggleClass2'
      }
      style = { this.styles.userTips }
    >
      <img
        src = { this.props.iconSrc }
        style = { this.styles.icon }/>
      <div style = { this.styles.tipInfo }>
        { this.props.tipInfoText }
      </div>
    </div>;
  }
}

UserTips.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  tipheight: PropTypes.number.isRequired,
  iconWidth: PropTypes.number.isRequired,
  iconHeignt: PropTypes.number.isRequired,
  tipShow: PropTypes.bool.isRequired,
  tipInfoText: PropTypes.string.isRequired,
};

export default UserTips;
