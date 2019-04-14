import React from 'react';
import ReactDOM from 'react-dom';

import { App as ReduxApp } from './redux-app/components/App/index.jsx';

export class Root extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { selection: 'default' };
    }

    renderHeader() {
        return (
            <div style={{ backgroundColor: '#CCCCCC' }}>
                <button
                    onClick={() => this.setState({ selection: 'default' })}
                    type="button"
                >
                    default
                </button>
                <button
                    onClick={() => this.setState({ selection: 'redux' })}
                    type="button"
                >
                    redux
                </button>
            </div>
        );
    }

    renderBody() {
        switch (this.state.selection) {
            case 'redux': return (<ReduxApp />); break;
            default: return (<div>default</div>); break;
        }
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
                {this.renderBody()}
            </div>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));
