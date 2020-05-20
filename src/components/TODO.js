import React from 'react';
 


class Todo extends React.Component {

        constructor(props){
            super(props);

                this.state= {
                    currentTask:''
                      };
        }
            
handleChange = (event) =>{

    this.setState({ currentTask: event.target.value }) ;
}    
          
 submitTask = (event) => {
    if (this.state.currentTask.trim()){

        event.preventDefault();
        this.props.data({
            text: this.state.currentTask ,
            completed : false ,
            id: Date.now()
        })
        this.setState({currentTask:''   }) }
     else {event.preventDefault(); 
         alert('please submit a Task first')}    
    }   
     

    render() {

        return(
         
        <div className="TODO">
            <h1>TO-DO APP</h1>
            <form onSubmit={this.submitTask}>
                <label>Add new Task</label>
                <input type="text" value={this.state.currentTask} className="ADD" onChange={this.handleChange} />
                <button className="submit-button" type="button" onClick={this.submitTask } >Submit</button>
            </form>
        </div>
      
        )
    }
}
export default Todo