import React from 'react';
import ReactFragmentColumn from './ReactFragmentColumn';

function ReactFragmentTable(){
    return(
        <table>
            <tbody>
                <tr>
                    <ReactFragmentColumn />
                </tr>
            </tbody>
        </table>
    )
}

export default ReactFragmentTable;