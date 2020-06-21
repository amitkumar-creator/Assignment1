import React from 'react';
import './Colomn.css'

class Colomn extends React.Component{
    state={
        colomn1: []
    }
   addItem(){
       this.setState({
           colomn1 : [...this.state.colomn1, ""]
       })
   }
   handleInput(e, index){
     this.state.colomn1[index]= e.target.value
     this.setState({colomn1:this.state.colomn1})
   }
   handleSubmit(e){
            console.log(this.state, "")
   }
    render(){
         return(
        <div className="Webdesign">
        <h2 >Welcome</h2><hr />
        <h4>Colomn section</h4><hr/>
        <div className="row">
        <div  className="btn btn-info Colomn_btn"><button onClick={(e)=>this.addItem(e)}>
        <i className="fa fa-plus-circle" aria-hidden="true"></i>Add Colomn</button></div>
        </div>
        <div className="colmn">
            <div className="col-sm-4">
                {
                this.state.colomn1.map((col1 ,index)=>{
                    return(
                        <div key={index}>
                            <input value={col1} onChange={(e)=>this.handleInput(e, index)} />
                        </div>
                    )
                })
               }<hr />
               <button onClick={(e)=>this.handleSubmit(e)}>Submit</button>
            </div>
            
        </div>
        </div>
    );
}
}
   

export default Colomn;