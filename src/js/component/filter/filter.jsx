import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './filter.scss';
import Select from '../select/select.jsx';
import Input from '../input/input.jsx';
import Button from '../button/button.jsx';

class Filter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let All = true;
    return <div className = "filter">
      <div className = "filterTitle">过滤器</div>
      <div className = "filterContent">
        <ul className = "leftFilterInfo">
          <li className = "selectBox">
            <span className = "selectName">状态</span>
            <Select
              width = "100px"
              height = "28px"
              selectList = { this.props.selectStatus }
              value = '2'
              />
          </li>
          <li className = "selectBox">
            <span className = "selectName">公司</span>
            <Select
              width = "120px"
              height = "28px"
              selectList = { this.props.selectCompany }
              value = '-1'
              all = { All }
              />
          </li>
          <li className = "selectBox">
            <span className = "selectName">用户</span>
            <Input width = "190px"
            height = "28px"
            borderColor = "#e0e0e0"
            paddingLeft = "10px"
            paddingRight = "0px"/>
          </li>
        </ul>
        <div className = "rightBtn">
            <Button
              width = "68px"
              height = "28px"
              borderColor = "#00b03d"
              backgroundColor = "#2ec75d"
              fontSize = "14px"
              color = "#fff"
              name = "应用"
            />
            <Button
              width = "68px"
              height = "28px"
              borderColor = "#e24b33"
              backgroundColor = "#f25b43"
              fontSize = "14px"
              color = "#fff"
              name = "删除"
            />
        </div>
    </div>
    </div>;
  }
}

Filter.propTypes = {
  selectStatus: PropTypes.array.isRequired,
  selectCompany: PropTypes.array.isRequired
};

export default Filter;
