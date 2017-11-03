import React from 'react';
import PropTypes from 'prop-types';
import OvalLabel from '../component/ovalLabel/ovalLabel.jsx';

class ovalLabelGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

    this.style = {
      ovalLabelGroupStyle: {
        display: 'flex',
        flexWrap: 'wrap',
      }
    };
  }

  render() {
    const {
      marginTop,
      marginRight,
    } = this.props;


    return (
      <div style = {this.style.ovalLabelGroupStyle}>
        <OvalLabel
          labelName = '用户姓名'
          marginTop = {marginTop}
          marginRight = {marginRight}
          isChoosed = {true}/>
        <OvalLabel
          labelName = '用户姓名'
          marginTop = {marginTop}
          marginRight = {marginRight}
          isChoosed = {false}/>
        <OvalLabel
          labelName = '用户姓名'
          marginTop = {marginTop}
          marginRight = {marginRight}
          isChoosed = {false}/>
        <OvalLabel
          labelName = '用户姓名'
          marginTop = {marginTop}
          marginRight = {marginRight}
          isChoosed = {false}/>
        <OvalLabel
          labelName = '用户姓名'
          marginTop = {marginTop}
          marginRight = {marginRight}
          isChoosed = {false}/>
        <OvalLabel
          labelName = '用户的姓名'
          marginTop = {marginTop}
          marginRight = {marginRight}
          isChoosed = {false}/>
      </div>
    );
  }
}

ovalLabelGroup.propTypes = {
  marginTop: PropTypes.string,
  marginRight: PropTypes.string,
};

export default ovalLabelGroup;
