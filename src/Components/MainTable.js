import React from 'react';
import TaskList from './TaskList'
import './MainTable.css';

class MainTable extends React.Component{
    state={
        taskList :[{index:Math.random(), ThingsToDo:"",Owner:"", Status:"",DueDate:"",Priority:""}]
    }
    addNewRow = (e) => {
        this.setState((prevState) => ({
            taskList: [...prevState.taskList, { index: Math.random(), ThingsToDo:"",Owner:"", Status:"",DueDate:"",Priority:"" }],
        }));
    }
    deteteRow = (index) => {
        this.setState({
            taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
        });
    }
    clickOnDelete(record) {
        this.setState({
            taskList: this.state.taskList.filter(r => r !== record)
        });
    }
    handleSubmit (e){
        console.log(this.state, "")
        // this.setState({
        //     taskList: [{ index: Math.random(), ThingsToDo:"",Owner:"", Status:"",DueDate:"",Priority:"" }],
        // })
    }
    render(){
        
        let { taskList }= this.state
        return(
            <>
            <h2> Web design</h2> <hr/>
            <p>Add Board Discription</p>
            <h4>Main table</h4>
                <button id="showbtn" onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i>New item</button>
                <button id="Colomn_Btn" onClick={this.addColomn} type="button" className="btn btn-info text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i>Add Colomn</button>

            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-10">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Things to do</th>
                            <th>Owner</th>
                            <th>Status</th>
                            <th>Due Date</th>
                            <th>Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TaskList  add={this.addNewRow} delete={this.clickOnDelete.bind(this)} taskList={taskList} />
                    </tbody>
                </table>
            <div className="card-footer text-center"> <button onClick={(e)=>this.handleSubmit(e)} className="btn btn-primary text-center">Submit</button></div>
              </div>  
            </div>
            </>
        );
    }
}

export default MainTable;

