import React from 'react';
import ReactDOM from 'react-dom';

import { App as MobXApp } from './mobx-app/components/App/index.jsx';
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
                <button
                    onClick={() => this.setState({ selection: 'mobx' })}
                    type="button"
                >
                    mobx
                </button>
            </div>
        );
    }

    renderBody() {
        switch (this.state.selection) {
            case 'redux': return (<ReduxApp />); break;
            case 'mobx': return (<MobXApp />); break;
            default: return (<div style={{ padding: '24px' }}>default</div>); break;
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
