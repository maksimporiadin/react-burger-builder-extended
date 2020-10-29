import React from 'react';
import Auux from '../../hoc/Auux';
import classes from './Layout.module.css';

const layout = (props) => (
    <Auux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auux>
);

export default layout;