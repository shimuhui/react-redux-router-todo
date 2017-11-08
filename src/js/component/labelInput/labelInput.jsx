import React from 'react';
import PropTypes from 'prop-types';
import Input from '../input/input.jsx';
import Select from '../select/select.jsx';

class labelInput extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

    this.style = {
      labelInputStyle: {
        display: 'flex',
        height: 'auto',
        marginTop: this.props.marginTop,
      },
      labelStyle: {
        width: '84px',
        lineHeight: '30px',
        color: '#323232',
      }
    };
  }

  render() {
    const {
      id,
      disabled,
      labelName,
      width,
      defaultValue,
      selectList,
      isSelect,
      getInputValue,
      value,
    } = this.props;

    return (
      <div style = {this.style.labelInputStyle}>
        <label
          htmlFor = {id}
          style = {this.style.labelStyle}>
          {labelName}
        </label>
        {
          isSelect
            ? <Select
                id = {id}
                value = {value}
                selectList = {selectList}
                getSelectValue = {getInputValue}
              />
            : <Input
                id = {id}
                value = {value}
                disabled = {disabled}
                width = {width}
                defaultValue = {defaultValue}
                getInputValue = {getInputValue}
              />
        }
      </div>
    );
  }
}

labelInput.propTypes = {
  labelName: PropTypes.string.isRequired,
  marginTop: PropTypes.string.isRequired,
  isSelect: PropTypes.bool,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  selectList: PropTypes.array,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  getInputValue: PropTypes.func,
  id: PropTypes.string.isRequired,
};

labelInput.defaultProps = {
  value: '',
  isSelect: false,
  width: '362px',
  marginTop: '14px',
  disabled: false,
  selectList: [],
  defaultValue: '',
  getInputValue: () => {}
};

export default labelInput;
