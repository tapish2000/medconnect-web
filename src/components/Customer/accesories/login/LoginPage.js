import React from 'react';
import axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';

import './LoginPage.css';

class LoginPage extends React.Component {


    state = {
        email:'',
        password:'',
        isCustomer:'',
        rememberMe:false,
        isError:''
    }

    isValidToSave=(rememberMe,info)=>{
        if(rememberMe){
            return info;
        }
        return '';
    }

    getBoolean = (isCustomer)=>{
        if(isCustomer === "Yes"){
            return "true";
        }
        return "false";
    }
    

    handleFormSubmit = async (e)=>{

        e.preventDefault();


        try{
            
            const {email,password,isCustomer,rememberMe} = this.state;

            if(isCustomer.length === 0){
                this.setState({isError:"Are u a customer?"})
                return;
            }

            await reactLocalStorage.set('email',this.isValidToSave(rememberMe,email));
            await reactLocalStorage.set('password',this.isValidToSave(rememberMe,password));
            await reactLocalStorage.set("isCustomer",this.isValidToSave(rememberMe,isCustomer));
            await reactLocalStorage.set("rememberMe",rememberMe);
            
            let res = await axios.post('https://glacial-caverns-39108.herokuapp.com/user/login',{
                "email":email,
                "password":password,
                "isCustomer":this.getBoolean(isCustomer)
            })
            
            if(res.data['error']!==null && res.data['error']!==undefined){
                await reactLocalStorage.set('isLoggedIn',"false");
                await reactLocalStorage.set('id','');
                this.setState({isError:res.data['error']});
                console.log(this.state.isError);
                
                return ;
            }else{
                
                await reactLocalStorage.set('isLoggedIn',"true");
                await reactLocalStorage.set('id',res.data._id);
                
                
                this.props.history.push('/');
                window.location.reload();
                return;
            }


            
        }catch(err){
            await reactLocalStorage.set('isLoggedIn',"false");
            await reactLocalStorage.set('id','');
            console.log("error happened inside catch block");
            this.setState({isError:"Invalid credentials"});
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
            this.setState({'isCustomer':"Yes"});
        }else{
            this.setState({'isCustomer':"No"});
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
                                (this.state.isError!==undefined && this.state.isError!==null&&this.state.isError.length>0) ? (<div className="alert alert-danger alertDesign" role="alert" onMouseEnter = {this.changeErrorState} >{this.state.isError}</div>):(null)
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
                                    <div className = "form-group btn1">
                                        <div className="dropdown" required>
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" required>
                                                Are You a customer?
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" required>
                                                <a className="dropdown-item" href="#" onClick = {this.eventHandler} >Yes</a>
                                                <a className="dropdown-item" href="#" onClick = {this.eventHandler}>No</a>
                                            </div>
                                        </div>
                                        <div className="val1">
                                            {(this.state.isCustomer!==null && this.state.isCustomer!==undefined&&this.state.isCustomer.length>0) ? (<div>{this.state.isCustomer}</div>):(null)}
                                        </div>
                                        <div>
                                            <a href="medconnect-web#/signup">Create your MedConnect acccount</a>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group submitBtn">
                                        <label htmlFor="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="rememberMe" type="checkbox" checked={this.state.rememberMe} onChange = {this.handleChange} /></span></label><br/>
                                        <input type="submit" name="submit" className="btn btn-info btn-md submitBtn1" value="Submit"/>
                                    </div>
                                    {/* <div id="register-link" className="text-right">
                                        <a href="#" className="text-info">Register here</a>
                                    </div> */}
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