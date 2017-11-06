import React from 'react';
import PropTypes from 'prop-types';
import Input from '../input/input.jsx';
import './_radio.scss';

class radio extends React.Component {
  constructor(props) {
    super(props);
    this._checkClick = this._checkClick.bind(this);
    this.state = {
      checked: this.props.isChecked
    };
  }

  componentWillMount() {

    this.style = {
      radioStyle: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '50px',
        fontSize: '12px',
        color: '#323232',
      },
      radioButtonEmStyle: {
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: '-2px 0 0 -2px',
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        backgroundColor: '#ffffff',
      },
      radioInputStyle: {
        margin: '0 4px 0 10px',
      }
    };
  }

  _checkClick() {

    this.setState({
      checked: !this.state.checked,
    });

    this.props.radioChange();
  }

  render() {
    const {
      radioInputChange,
      text,
      isShowInput
    } = this.props;

    return (
      <div style = {this.style.radioStyle}>
        <span
          className = 'radioButtonStyle'
          onClick = {this._checkClick}
          style = {
            this.state.checked
            ? {backgroundColor: '#2ec75d'}
            : {backgroundColor: '#cccccc'}
          }>
          <em style = {this.style.radioButtonEmStyle}></em>
        </span>
        {text}

        {
          isShowInput
            ?<div style = {this.style.radioInputStyle}>
                <Input
                  width = '58px'
                  height = '20px'
                  paddingLeft = '6px'
                  paddingRight = '6px'
                  inputChange = {radioInputChange}/>
              </div>
            : ''}
        {
          isShowInput
            ?<span>台</span>
            : ''}
      </div>
    );
  }
}

radio.propTypes = {
  text: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  isShowInput: PropTypes.bool,
  radioChange: PropTypes.func.isRequired,
  radioInputChange: PropTypes.func.isRequired,
};

export default radio;
