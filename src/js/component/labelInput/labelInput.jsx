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
        justifyContent: 'space-between',
        height: 'auto',
        marginTop: this.props.marginTop,
      },
      labelStyle: {
        lineHeight: '30px',
        color: '#323232',
      }
    };
  }

  render() {

    return (
      <div style = {this.style.labelInputStyle}>
        <label
          htmlFor="username"
          style = {this.style.labelStyle}>
          {this.props.labelName}
        </label>
        {
          this.props.isSelect
            ? <Select
                id = 'companyname'
              />
            : <Input
                id = 'username'
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
};

labelInput.defaultProps = {
  isSelect: false,
};

export default labelInput;
