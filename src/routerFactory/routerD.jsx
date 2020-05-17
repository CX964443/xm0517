import { Route, Redirect, Switch ,BrowserRouter } from 'react-router-dom'
import React, { Component } from 'react';

class RouterD extends Component {
    render() {
        const { routerList } = this.props
        let redirect = routerList.filter(v=> v.redirect)
        let newroute = routerList.filter(v=> !v.redirect)
        return (
            <BrowserRouter>
            <Switch>
                {
                    //路由
                    newroute.map((v,i)=>{
                        return <Route key={v.key} path={v.path} render={props => {
                            if (v.children) {
                                return <v.component {...props} routerList={v.children} />
                            } else {
                                return <v.component {...props} />
                            }
                        }} />
                    })
                }
                {
                    //重定向
                    redirect.map((v,i)=>{
                        return <Redirect key={v.key} from={v.path} to={v.redirect} />
                    })
                }
            </Switch>
            </BrowserRouter>
        );
    }
}

export default RouterD;