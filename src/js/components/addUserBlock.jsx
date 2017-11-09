import React from 'react';
import PropTypes from 'prop-types';

class AddUserBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

    this.style = {
      addUserBlock: {
        paddingLeft: '20px',
        paddingBottom: '28px',
        marginBottom: '20px',
        boxSizing: 'border-box',
        width: this.props.width,
        height: '100%',
        border: '1px solid #eeeeee',
        boxShadow: '0 1px 4px 0 rgba(0,0,0,0.05)',
        backgroundColor: '#fdfdfd',
      },
      blockTitle: {
        lineHeight: '40px',
        color: '#727272',
      },
    };
  }

  render() {
    const {
      title,
      children
    } = this.props;

    return (
      <div style = {this.style.addUserBlock}>
        <p style = {this.style.blockTitle}>{title}</p>
        {
          React.Children.map(children, function(child) {
            return child;
          })
        }
      </div>
    );
  }
}

AddUserBlock.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
  children: PropTypes.node,
};

AddUserBlock.defaultProps = {
  width: '488px',
};

export default AddUserBlock;
