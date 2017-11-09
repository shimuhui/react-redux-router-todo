import React from 'react';
import PropTypes from 'prop-types';
import OvalLabel from '../component/ovalLabel/ovalLabel.jsx';
import InputButton from '../component/inputButton/inputButton.jsx';

class PushMessageCount extends React.Component {
  constructor(props) {
    super(props);
    this._addChooseCount = this._addChooseCount.bind(this);
    this._deleteOvalLabel = this._deleteOvalLabel.bind(this);
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillMount() {

    this.style = {
      ovalLabelGroupStyle: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      inputButtonStyle: {
        marginTop: '11px',
        marginRight: '20px',
      }
    };
  }

  _countChangeClick(id) {
    this.props.pushMessageChange(id);
  }

  _addChooseCount(value) {
    this.props.pushMessCountAdd(value);
  }

  _deleteOvalLabel(value) {
    this.props.pushMessCountDelete(value);
  }

  render() {

    return (
      <div>
        <div style = {this.style.ovalLabelGroupStyle}>
          {
            this.props.showListArr.map((item, id) => {
              return (
                <div key = {id}>
                  <OvalLabel
                    ovalLabelId = {item.id}
                    labelName = {item.name}
                    isChecked = {this.props.checkedId == item.id ? true:false}
                    ovalLabelClick = {() => {this._countChangeClick(item.id);}}
                    isShowClose = {item.id > 5 ? true : false}
                    closeButtonClick = {
                      () => {this._deleteOvalLabel(item.id);}}/>
                </div>
              );
            })
          }
        </div>
        {
          this.props.isShowInputButton
            ?<div style={this.style.inputButtonStyle}>
              <InputButton
                id = {this.props.id}
                buttonClick = {this._addChooseCount}/>
            </div>
            :''
        }
      </div>
    );
  }
}

PushMessageCount.propTypes = {
  isShowInputButton: PropTypes.bool,
  showListArr: PropTypes.array.isRequired,
  pushMessageChange: PropTypes.func.isRequired,
  pushMessCountAdd: PropTypes.func.isRequired,
  pushMessCountDelete: PropTypes.func.isRequired,
  checkedId: PropTypes.number,
  id: PropTypes.string.isRequired,
};

PushMessageCount.defaultProps = {
  isShowInputButton: true,
  checkedId: 0,
};

export default PushMessageCount;
