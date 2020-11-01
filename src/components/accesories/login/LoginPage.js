import React from 'react';
import axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';

import './LoginPage.css';

class LoginPage extends React.Component {


    state = {
        email:'',
        password:'',
        isCustomer:true,
        rememberMe:false,
        isError:''
    }

    isValidToSave=(rememberMe,info)=>{
        if(rememberMe){
            return info;
        }
        return '';
    }
    

    handleFormSubmit = async (e)=>{

        e.preventDefault();

        try{
            
            const {email,password,isCustomer,rememberMe} = this.state;
            await reactLocalStorage.set('email',this.isValidToSave(rememberMe,email));
            await reactLocalStorage.set('password',this.isValidToSave(rememberMe,password));
            await reactLocalStorage.set("isCustomer",this.isValidToSave(rememberMe,isCustomer));
            await reactLocalStorage.set("rememberMe",rememberMe);
            
            let res = await axios.post('http://glacial-caverns-39108.herokuapp.com/user/login',{
                "email":email,
                "password":password,
                "isCustomer":isCustomer
            })
            // console.log(res.data['error']);
            if(res.data['error']!==null && res.data['error']!==undefined){
                
                this.setState({isError:res.data['error']});
                console.log(this.state.isError);
                return ;
            }else{
                this.props.history.push('/');
                return;
            }


            
        }catch(err){
            console.log("error happened inside catch block");
            this.setState({isError:"something wrong happened"});
        }
    }

    handleChange = (event)=>{
        event.preventDefault();
        const input = event.target;
        let value = null;
        if(input.type === 'checkbox'){
            value = input.checked;
        }else{
            value = input.value;
        }
        console.log("value inside handleChange fn");
        console.log(value);

        this.setState({[input.name]:value});

    }

    isValidToGetInfo = (rememberMe,key)=>{
        if(rememberMe){
            return reactLocalStorage.get(key);
        }
        return '';
    }

    eventHandler=(e)=>{
        e.preventDefault();
        let value = e.target.textContent;
        if(value === "Yes"){
            this.setState({'isCustomer':true});
        }else{
            this.setState({'isCustomer':false});
        }
    }


    changeErrorState = ()=>{
        console.log("inside changeErrorState");
        this.setState({isError:''});
    }


    componentDidMount=()=>{
        const rememberMe = (reactLocalStorage.get('rememberMe') === true);
        const email = this.isValidToGetInfo(rememberMe,'email');
        const password = this.isValidToGetInfo(rememberMe,'password');
        const isCustomer = this.isValidToGetInfo(rememberMe,'isCustomer');

        this.setState({email,password,isCustomer,rememberMe});
    }

    render = ()=>{
        return(
            <div id="login">
                
                    
               
                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            {
                                (this.state.isError!==undefined && this.state.isError!==null&&this.state.isError.length>0) ? (<div className="alert alert-danger" role="alert" onMouseEnter = {this.changeErrorState}>{this.state.isError}</div>):(null)
                            }
                            <div id="login-box" className="col-md-12">
                                <form id="login-form" className="form" onSubmit = {this.handleFormSubmit}>
                                    <h3 className="text-center text-info">Login</h3>
                                    <div className="form-group">
                                        <label htmlFor="username" className="text-info">Username:</label><br/>
                                        <input type="email" name="email" id="username" className="form-control" value = {this.state.email} onChange = {this.handleChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="text-info">password:</label><br/>
                                        <input type="password" name="password" id="password" className="form-control" value = {this.state.password} onChange = {this.handleChange} required/>
                                    </div>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Are You a customer?
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#" onClick = {this.eventHandler} >Yes</a>
                                            <a className="dropdown-item" href="#" onClick = {this.eventHandler}>No</a>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="rememberMe" type="checkbox" checked={this.state.rememberMe} onChange = {this.handleChange} /></span></label><br/>
                                        <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
                                    </div>
                                    <div id="register-link" className="text-right">
                                        <a href="#" className="text-info">Register here</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default LoginPage;