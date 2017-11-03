import React from 'react';
import PropTypes from 'prop-types';
import Config from '../../configs/config.js';

class select extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {
      width,
      height,
    } = this.props;

    const iconMargin = (width.split('px')[0] - 17) + 'px';

    this.style = {
      select: {
        paddingLeft: '10px',
        paddingRight: '22px',
        boxSizing: 'border-box',
        width: width,
        height: height,
        backgroundColor: '#fafafa',
        border: '1px solid #e0e0e0',
        borderRadius: '0',
        backgroundImage: 'url(' + Config.imgUrl + 'selectIcon.png)',
        backgroundSize: '9px 14px',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: iconMargin,
        backgroundPositionY: 'center',
      },
    };
  }

  render() {

    return (
      <div>
        <select name="" id = {this.props.id} style = {this.style.select}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    );
  }
}

select.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

select.defaultProps = {
  width: '364px',
  height: '30px',
};

export default select;
