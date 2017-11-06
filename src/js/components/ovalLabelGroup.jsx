import React from 'react';
import PropTypes from 'prop-types';
import OvalLabel from '../component/ovalLabel/ovalLabel.jsx';

class ovalLabelGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckedId: 0,
    };
  }

  componentDidMount() {
  }

  componentWillMount() {
    this.style = {
      ovalLabelGroupStyle: {
        display: 'flex',
        flexWrap: 'wrap',
      }
    };
  }

  _ovalLabelClick(id) {
    console.log(this.state.isCheckedId);
    this.setState({
      isCheckedId: id,
    });
  }

  render() {
    const {
      marginTop,
      marginRight,
      ovalData,
    } = this.props;


    return (
      <div style = {this.style.ovalLabelGroupStyle}>
        {
          ovalData.map((item, id) => {
            return (
              <div key = {id}>
                <OvalLabel
                  ovalLabelId = {item.id}
                  labelName = {item.name}
                  marginTop = {marginTop}
                  marginRight = {marginRight}
                  isChecked = {this.state.isCheckedId == id ? true:false}
                  ovalLabelClick = {() => {this._ovalLabelClick(id);}}/>
              </div>
            );
          })
        }
      </div>
    );
  }
}

ovalLabelGroup.propTypes = {
  marginTop: PropTypes.string,
  marginRight: PropTypes.string,
  ovalData: PropTypes.array.isRequired,
};

ovalLabelGroup.defaultProps = {
  marginTop: '12px',
  marginRight: '11px',
  ovalData: [],
};

export default ovalLabelGroup;
