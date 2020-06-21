import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 


class Sidebar extends React.Component{
   
    render(){
         return(
        <>
        <div>
            <div id="mySidenav" className="sidenav">
                    <div className="row">
                        <div className="col"><h5><i className="fa fa-home" aria-hidden="true"></i> Main</h5></div>
                    </div>
                <div className="Link">
                     <Link to="/">Main Table</Link>
                    <Link to="/colomn">Add Colomn</Link>
                </div>
            </div>
        </div>
        </>
    );
}
    }
   

export default Sidebar;

