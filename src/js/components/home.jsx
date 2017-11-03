import React from 'react';
// import PropTypes from 'prop-types';
import AddUserBlock from './addUserBlock.jsx';
import Button from '../component/button/button.jsx';
import LabelInput from '../component/labelInput/labelInput.jsx';
import OvalLabelGroup from './ovalLabelGroup.jsx';
import InputButton from '../component/inputButton/inputButton.jsx';
import Radio from '../component/radio/radio.jsx';
import CheckboxGroup from './checkboxGroup.jsx';

class home extends React.Component {
  constructor(props) {
      super(props);
  }

  componentWillMount() {

    this.style = {
      homeRight: {
        position: 'absolute',
        right: '0px',
        top: '0px',
        height: '100%',
        paddingBottom: '20px',
        boxSizing: 'border-box',
      },
      homeMain: {
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      },
      homeButton: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '6px 0 10px 0',
      },
      blockLabelInput: {
        marginRight: '20px',
      },
      blockOvalLabelGroup: {
        marginTop: '-2px',
        marginRight: '8px',
      },
      blockInputButton: {
        marginTop: '11px',
        marginRight: '20px',
      },
      blockRadio: {
        display: 'flex',
      }
    };
  }

  render() {
    return (
        <div>
          <div style = {this.style.homeMain}>
            <div>
              <AddUserBlock
                title = '信息'>
                <div style={this.style.blockLabelInput}>
                  <LabelInput labelName = '用户姓名' marginTop = '10px'/>
                  <LabelInput labelName = '手机号码' marginTop = '14px'/>
                  <LabelInput
                    labelName = '公司名称'
                    marginTop = '14px'
                    isSelect = {true}/>
                </div>
              </AddUserBlock>
              <AddUserBlock
                title = '角色'>
                <div style={this.style.blockOvalLabelGroup}>
                  <OvalLabelGroup
                    marginTop = '12px'
                    marginRight = '11px'/>
                </div>
              </AddUserBlock>
              <AddUserBlock
                title = '每天可推送消息数'>
                <div>
                  <div style={this.style.blockOvalLabelGroup}>
                    <OvalLabelGroup
                      marginTop = '12px'
                      marginRight = '11px'/>
                  </div>
                  <div style={this.style.blockInputButton}>
                    <InputButton />
                  </div>
                </div>
              </AddUserBlock>
              <AddUserBlock
                title = '相框管理数量'>
                <div style={this.style.blockRadio}>
                  <Radio
                    text = '自定义'
                    isShowInput = {true}
                    isChoose = {true}/>
                  <Radio
                    text = '不限制'
                    isShowInput = {false}
                    isChoose = {false}/>
                </div>
              </AddUserBlock>
            </div>
            <div style = {this.style.homeRight}>
              <AddUserBlock
                title = '权限'
                width = '269px'>
                <CheckboxGroup/>
              </AddUserBlock>
            </div>
          </div>
          <div style = {this.style.homeButton}>
            <Button
              name = '取消'
              fontSize = '16px'
              borderColor = '#d6d6d6'
              backgroundColor = '#e6e6e6'
              color = '#323232'/>
            <Button
              name = '确定'
              fontSize = '16px'
              borderColor = '#00b03d'
              backgroundColor = '#2ec75d'
              color = '#ffffff'/>
          </div>

        </div>
    );
  }
}
// home.propTypes = {
// };
export default home;
