import React, { Component } from 'react'
import ErrorBoundaryChild from './ErrorBoundaryChild';
import ErrorBoundary from './ErrorBoundary';

class ErrorBoundaryExample extends Component {


    render() {
        return (
            <div>
                <ErrorBoundary><ErrorBoundaryChild hero={"Hero1"} /></ErrorBoundary>
                <ErrorBoundary><ErrorBoundaryChild hero={"Hero2"} /></ErrorBoundary>
                <ErrorBoundary><ErrorBoundaryChild hero={"Hero3"} /></ErrorBoundary>


            </div>
        )
    }
}

export default ErrorBoundaryExample;