import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../component/checkbox/checkbox.jsx';

class ovalLabelGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

    this.style = {
      checkboxGroupStyle: {
        marginTop: '10px',
      },
      checkboxListStyle: {
        marginBottom: '14px',
      }
    };
  }

  render() {

    return (
      <div style = {this.style.checkboxGroupStyle}>
        <div style = {this.style.checkboxListStyle}>
          <Checkbox
            name = '1111111'
            isChecked = {true}/>
        </div>
        <div style = {this.style.checkboxListStyle}>
          <Checkbox
            name = '测试选中不选中'
            isChecked = {false}/>
        </div>
        <div style = {this.style.checkboxListStyle}>
          <Checkbox
            name = '测试选中不选中'
            isChecked = {false}/>
        </div>
        <div style = {this.style.checkboxListStyle}>
          <Checkbox
            name = '测试选中不选中'
            isChecked = {false}/>
        </div>
      </div>
    );
  }
}

ovalLabelGroup.propTypes = {

};

export default ovalLabelGroup;
