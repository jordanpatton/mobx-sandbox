import React from 'react';
import ReactDOM from 'react-dom';

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
            case 'redux': return (<div>redux</div>); break;
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
