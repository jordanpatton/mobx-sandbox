import * as React from 'react';
import * as ReactDOM from 'react-dom';

import GraphQLApp from './graphql-app/components/App/index.jsx';
import MobXApp from './mobx-app/components/App/index.jsx';
import ReduxApp from './redux-app/components/App/index.jsx';

export interface RootProps {};
export interface RootState { selection: string };

export class Root extends React.Component<RootProps, RootState> {
    constructor(props: RootProps, state: RootState) {
        super(props, state);
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
                <button
                    onClick={() => this.setState({ selection: 'graphql' })}
                    type="button"
                >
                    graphql
                </button>
            </div>
        );
    }

    renderBody() {
        switch (this.state.selection) {
            case 'redux': return (<ReduxApp />); break;
            case 'mobx': return (<MobXApp />); break;
            case 'graphql': return (<GraphQLApp />); break;
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
