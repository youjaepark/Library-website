import React from "react";
import StartFirebase from "../firebaseConfig";
import { ref, set, get, update, remove, child } from "firebase/database";

class Crud extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            db:'',
            username:'',
            fullname:'',
            phonenumber:'',
            dab:''
        }
    }
    componentDidMount(){
        this.setState({
            db: StartFirebase() 
        });
    }
    render(){
        return(
            <>
                <label>Enter Username</label>
                <input type='text' id='userbox' value={this.state.username} 
                onchange={e =>{this.setState({username: e.target.value});}}/>
                <br/><br/>
            </>
            
        )
    }
}