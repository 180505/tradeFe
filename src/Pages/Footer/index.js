import React, { Component } from 'react';
import './index.css'
class Footer extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {  }
    render() { 
        return ( 
            <div className='footer'>
                <span>关于我们</span>
                <span>举报投诉</span>
                <span>免责声明</span>
                <span>联系我们</span>
                <span>合作申请</span>
                <span>意见建议</span>
                <span>版权申诉</span>
            </div>
         );
    }
}
 
export default Footer;