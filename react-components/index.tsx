import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class ReactApp extends React.Component {
    render() {
        return (
            <div>
                Hello from ReactApp
            </div>
        )
    }
}

export class Avatar extends React.Component {
    render() {
        return (
            <div>
                Hello from Avatar
            </div>
        )
    }
}


ReactDOM.render(
    <ReactApp/>,
    document.getElementById('app')
);