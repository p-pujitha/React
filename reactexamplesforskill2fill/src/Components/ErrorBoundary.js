import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, info) {
        console.log(error);
    } 
    render() {
        if (this.state.hasError) {
            return (
                <h1>Error is present</h1>
            )
        }
        else {
            return this.props.children
        }

    }
}

export default ErrorBoundary;