import React from 'react';
import { markdown } from 'markdown';

const BinsViewer = (props) => {
    const rawHTML = markdown.toHTML(props.bin.content);
    return (
        <div className={props.size}>
            <h5>Output</h5>
            <div dangerouslySetInnerHTML={{__html: rawHTML}}></div>
        </div>
    );
};

export default BinsViewer;