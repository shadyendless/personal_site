import React, { Component } from 'react';
import zenscroll from 'zenscroll';

class ToTopButton extends Component {
    state = {
        shouldShow: false
    };

    componentDidMount() {
        this.updateState();
    }

    componentDidUpdate() {
        this.updateState();
    }

    updateState = () => {
        if (document.body.scrollHeight > window.innerHeight) {
            if (!this.state.shouldShow) {
                this.setState(() => ({
                    shouldShow: true
                }));
            }
        } else {
            if (this.state.shouldShow) {
                this.setState(() => ({
                    shouldShow: false
                }));
            }
        }
    }

    render() {
        return (this.state.shouldShow) ? (
            <button className="is-inline-flex justify-content-center align-items-center" id="to-top" onClick={() => zenscroll.toY(0)}>
                <span className="input-fix" tabIndex="-1">
                    <i className="fas fa-caret-up"></i>
                </span>
            </button>
        ) : null;
    }
}

export default ToTopButton;