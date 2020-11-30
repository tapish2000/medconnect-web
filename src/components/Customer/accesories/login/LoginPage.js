import React from 'react';
import axios from 'axios';
import Loading from '../../Loading/Loading'
import {reactLocalStorage} from 'reactjs-localstorage';

import './LoginPage.css';

class LoginPage extends React.Component {


    state = {
        loading: false,
        email:'',
        password:'',
        selectedOption: "customer",
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
        if(isCustomer){
            return "true";
        }
        return "false";
    }
    

    handleFormSubmit = async (e)=>{
        this.setState({loading:true})
        e.preventDefault();
        try{
            const {email,password,selectedOption,rememberMe} = this.state;

            // if(isCustomer.length === 0){
            //     this.setState({isError:"Are u a customer?"})
            //     return;
            // }

            await reactLocalStorage.set('email',this.isValidToSave(rememberMe,email));
            await reactLocalStorage.set('password',this.isValidToSave(rememberMe,password));
            await reactLocalStorage.set("user",this.isValidToSave(rememberMe,selectedOption));
            await reactLocalStorage.set("rememberMe",rememberMe);
            
            let isCustomer = true;
            if (selectedOption === "shop") {
                isCustomer = false;
            }

            let res = await axios.post('https://glacial-caverns-39108.herokuapp.com/user/login',{
                "email":email,
                "password":password,
                "isCustomer":this.getBoolean(isCustomer)
            })
            
            if(res.data['error']!==null && res.data['error']!==undefined){
                await reactLocalStorage.set('isLoggedIn',"false");
                await reactLocalStorage.set('id','');
                this.setState({isError:res.data['error'], loading:false});
                console.log(this.state.isError);
                
                return ;
            }else{
                await reactLocalStorage.set('user', selectedOption);
                await reactLocalStorage.set('isLoggedIn',"true");
                await reactLocalStorage.set('id',res.data._id);
                if (isCustomer) {
                    this.props.history.push('/');
                } else {
                    this.props.history.push('/shop/dashboard');
                }
                window.location.reload();
                this.setState({loading: false})
                return;
            }

        }catch(err){
            await reactLocalStorage.set('isLoggedIn',"false");
            await reactLocalStorage.set('id','');
            console.log("error happened -> inside catch block");
            this.setState({isError:"Invalid credentials", loading:false});
        }
    }

    handleChange = (event)=>{
        const input = event.target;
        let value = null;
        if(input.type === 'checkbox') {
            value = input.checked;
        } else {
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
        this.setState({
            selectedOption: e.target.value
        })
        // console.log(this.state.selectedOption);
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
            <>
                <Loading show={this.state.loading} />
                {
                    this.state.isError === '' ? null : (
                        <div className="alert alert-danger text-center">
                            Enter valid credentials!
                        </div>)
                }
                <div className="card" id="login" style={{width:"40%"}}>
                    <div className="card-header text-center">
                        Login
                    </div>
                    <div className="card-body">
                        <form onSubmit = {this.handleFormSubmit}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" value = {this.state.email} onChange = {this.handleChange} required />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Password" value = {this.state.password} onChange = {this.handleChange} required />
                            </div>
                            <div className="form-group">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="shop" id="shop" value="shop" checked={this.state.selectedOption === "shop"} onChange={this.eventHandler} />
                                    <label className="form-check-label" for="shop">Shop</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="customer" id="customer" value="customer" checked={this.state.selectedOption === "customer"} onChange={this.eventHandler} />
                                    <label className="form-check-label" for="customer">Customer</label>
                                </div>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="remember-me" name="rememberMe" checked={this.state.rememberMe} onChange = {this.handleChange} />
                                <label className="form-check-label" for="remember-me">Remember Me</label>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <button type="submit" className="btn btn-info">Sign In</button>
                                </div>
                                <div className="col-md">
                                    <div>Not Registerd?<a href="/signup"> Register Here</a></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
    
}

export default LoginPage;