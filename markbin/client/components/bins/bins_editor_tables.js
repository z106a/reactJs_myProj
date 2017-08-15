import React, {Component} from 'react';
import { Editor } from 'react-markdown-preview-editor';
import 'react-markdown-preview-editor/lib/css/style.css';

class TableEditor extends Component {
    onEditorChange(content) {
        Meteor.call('bins.update', this.props.bin, content);
    }

    render() {
        return (
            <div className="col-xs-8">
                <h5>Input</h5>
                <Editor
                    defaultValue={this.props.bin.content}
                   // onChange={this.onEditorChange.bind(this)}
                     />
            </div>
        );
    }
}

export default TableEditor;