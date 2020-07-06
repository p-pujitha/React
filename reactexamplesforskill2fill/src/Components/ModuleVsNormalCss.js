import React from 'react';
import './normalcss.css';

import styles from './normal.module.css';
function ModuleVsNormalCss() {
    return (
        <div>
            <h1 className="normal"> Normal Css </h1>
            <h2 className={styles.module}>Module Css</h2>
        </div>
    )
}

export default ModuleVsNormalCss;