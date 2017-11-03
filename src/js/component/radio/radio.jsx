import React from 'react';
import PropTypes from 'prop-types';
import Input from '../input/input.jsx';

class radio extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {
      isChoose
    } = this.props;

    this.style = {
      radioStyle: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '50px',
        fontSize: '12px',
        color: '#323232',
      },
      radioButtonStyle: {
        position: 'relative',
        display: 'block',
        marginRight: '6px',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: isChoose ? '#2ec75d' : '#cccccc',
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

  render() {

    return (
      <div style = {this.style.radioStyle}>
        <span style = {this.style.radioButtonStyle}>
          <em style = {this.style.radioButtonEmStyle}></em>
        </span>
        {this.props.text}

        {
          this.props.isShowInput
            ?<div style = {this.style.radioInputStyle}>
                <Input
                  width = '58px'
                  height = '20px'/>
              </div>
            : ''}
        {
          this.props.isShowInput
            ?<span>台</span>
            : ''}
      </div>
    );
  }
}

radio.propTypes = {
  text: PropTypes.string.isRequired,
  isChoose: PropTypes.bool,
  isShowInput: PropTypes.bool,
};

export default radio;
