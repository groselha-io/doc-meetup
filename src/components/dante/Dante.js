import React, { Component } from 'react'
import Dante2 from 'Dante2'

export default class Dante extends Component {
    state = {
        nome: "Luan",
        Lorem: {"blocks":[{"key":"99c5e","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut velit metus, interdum quis risus id, varius lacinia neque. Suspendisse eget luctus lectus. Phasellus nulla neque, dignissim semper nisi id, interdum porta lorem. Donec in justo tellus. Curabitur placerat mi neque, sed luctus lectus interdum sodales. ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":26,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"29ovb","text":"Cras vel viverra ante. Mauris ac condimentum dui, et venenatis quam. Integer pellentesque convallis placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a elit aliquam, vulputate leo quis, sodales massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras pharetra mollis consequat. Vivamus rutrum libero non imperdiet consectetur. Integer auctor metus at libero fringilla","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}
    }

    render() {
        return <Dante2 content={this.state.Lorem}/>
    }
}
