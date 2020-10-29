import React from 'react';

import classes from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removed} disabled={props.disabledItem.less}>Less</button>
        <button className={classes.More} onClick={props.added} disabled={props.disabledItem.more}>More</button>
    </div>
);

export default buildControl;