import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import {NavLink} from "react-router-dom";





const BaseLayout=({children})=>{
    return(
        <div>
            <AppBar position="static" className="AppBar">
                <Typography variant="h6">
                    <NavLink to="/Home" className="nav-link" activeClassName="nav-link-active">
                         Home
                    </NavLink>
                    <NavLink to="/ToDo" className="nav-link" activeClassName="nav-link-active">
                         ToDo
                    </NavLink>
                    <NavLink to="/About" className="nav-link" activeClassName="nav-link-active">
                         About
                     </NavLink>
                 </Typography>
            </AppBar>
            {children}
        </div>
    );
};

export default BaseLayout;