import React from 'react';
import PropTypes from 'prop-types';
import Config from '../../configs/config.js';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this._change = this._change.bind(this);
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
        border: '1px solid',
        borderColor: '#e0e0e0',
        borderRadius: '0',
        backgroundImage: 'url(' + Config.imgUrl + 'selectIcon.png)',
        backgroundSize: '9px 14px',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: iconMargin,
        backgroundPositionY: 'center',
        cursor: 'pointer',
      },
    };
  }
  _change(id) {
    let obj = {};
    obj[id] = this.myselect.value;
    this.props.getSelectValue(obj);
  }

  render() {
    const {
      id,
      selectList,
      value,
    } = this.props;
    let all =
    this.props.all ? <option value = '-1'>全部</option> : '';
    return (
      <div>
        <select
          name=""
          id = {id}
          ref={(select) => {this.myselect = select;}}
          onChange = {() => { this._change(id);}}
          value = {value}
          style = {this.style.select}>
          {
            selectList.map((item, id) => {
              return (<option
                key = {id}
                value = {item.id}>{
                  item.companyName ? item.companyName : item.name}</option>);
            })
          }
          { all }
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  selectList: PropTypes.array,
  getSelectValue: PropTypes.func,
  value: PropTypes.string,
  all: PropTypes.bool,

};

Select.defaultProps = {
  id: '-1',
  width: '362px',
  height: '28px',
  selectList: [],
  value: '',
  getSelectValue: () => {}
};

export default Select;
