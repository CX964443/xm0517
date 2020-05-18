import React, { Component } from 'react';
import "./loginPage.less"
import { connect } from 'react-redux'
import { loginUser, registerUser } from '@/actions/purple'

export default @connect(state => ({}), {
    loginUser,
    registerUser,
})

class loginPage extends Component {
    constructor(){
        super()
        this.state = {
            pageState:"",
            message:"Your info has been saved",
            messageState:"succeed",
            regRePwd:"",
            regPwd:"",
            regUsername:"",
            logPwd:"",
            logUsername:""
        }
    }
    //登录按钮
    signIn = () =>{
        const { logPwd , logUsername } = this.state
        
        if (!logPwd || !logUsername) { //未输入完全
            alert("输入完再点那个按钮行不行？")
        } else { // 基本输入没有问题，可以进行正常请求
            this.props.loginUser({
                username:logUsername,
                pwd:logPwd
            }).then( res =>{
                //如果登录不成功，给予提示信息
                if (res.payload.status !== "200") {
                    alert(res.payload.message)
                }
                //成功则进入主界面 并上传redux用户信息 
                else if (res.payload.status === "200") {
                    this.props.history.push('/purple')
                }
            })
        }
    }
    //注册按钮
    signUp = () =>{
        const { regRePwd , regPwd , regUsername } = this.state

        if (regRePwd !== regPwd) { //俩密码对不上
            this.setState({
                message:"拜托，密码都能输成不一样的，能不能行了？",
                messageState:"denger"
            })
        } else if ( !regPwd || !regRePwd || !regUsername ) { //没有输入完全信息
            this.setState({
                message:"能不能写全了再按那个按钮？",
                messageState:"denger"
            })
        } else { // 基本输入没有问题，可以进行正常请求
            this.props.registerUser({
                username:regUsername,
                pwd:regPwd
            }).then( res =>{
                //如果注册不成功，给予提示信息
                if (res.payload.status !== "200") {
                    this.setState({
                        message:res.payload.info,
                        messageState:"denger"
                    })
                }
                //成功则进入登录界面 并填写刚刚注册用户名 
                else if (res.payload.status === "200") {
                    this.setState({pageState:"SignIn",logUsername:regUsername})
                    this.props.history.push('/login/SignIn')
                }
            })
        }
    }
    turnState = () =>{
        const { pageState } = this.state
        if ( pageState === "SignIn" ) {
            //及时更改state，更换动态路由不会重新渲染整个生命周期
            this.setState({pageState:"SignUp"})
            this.props.history.push('/login/SignUp')
        } else if ( pageState === "SignUp" ) {
            this.setState({pageState:"SignIn"})
            this.props.history.push('/login/SignIn')
        }
    }
    componentDidMount(){
        //获取动态路由参数
        this.setState({pageState:this.props.match.params.state})
    }
    render() {
        const { pageState , message , messageState } = this.state
        //404拦截 返回登录界面
        if ( pageState !== "SignIn" && pageState !== "SignUp" ) {
            this.setState({pageState:"SignIn"})
            this.props.history.push('/login/SignIn')
        }
        return (
            <div className="loginPage">
                {
                    //登录界面
                    pageState === "SignIn" ?
                    <div className="loginBox">
                        <h3>SIGN IN</h3>
                        <input type="text" placeholder="USERNAME" 
                        onChange={(e)=>{this.setState({logUsername:e.target.value})}}
                        value={this.state.logUsername}/>
                        <input type="password" placeholder="PASSWORD" 
                        onChange={(e)=>{this.setState({logPwd:e.target.value})}}
                        value={this.state.logPwd}/>
                        <p>
                            Not registered? 
                            <span onClick={this.turnState}>Sign Up</span>
                        </p>
                        <button onClick={this.signIn}>Sign In</button>
                    </div>
                    //注册界面
                    : pageState === "SignUp" ?
                    <div className="loginBox">
                        <h3>SIGN UP</h3>
                        <div className={"message "+messageState}>{message}</div>
                        <input type="text" placeholder="USER" 
                        onChange={(e)=>{this.setState({regUsername:e.target.value})}}/>
                        <input type="password" placeholder="PASSWORD" 
                        onChange={(e)=>{this.setState({regPwd:e.target.value})}}/>
                        <input type="password" placeholder="RE-TYPE PASSWORD" 
                        onChange={(e)=>{this.setState({regRePwd:e.target.value})}}/>
                        <p>
                            Already registered? 
                            <span onClick={this.turnState}>Sign In</span>
                        </p>
                        <button onClick={this.signUp}>Sign Up</button>
                    </div> 
                    //三目 防止报错
                    : ""
                }
                
            </div>
        );
    }
}
// export default loginPage