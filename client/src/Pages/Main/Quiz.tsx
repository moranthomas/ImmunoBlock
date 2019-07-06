import React, { Component } from 'react';

interface QuizState {
}
class Quiz extends Component<{}, QuizState> {
    /**
     * @ignore
     */
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    /**
     * @ignore
     */
    render() {
        return (
            <p>Hello</p>
        );
    }
}

export default Quiz;
