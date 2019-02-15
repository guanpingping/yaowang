import React from "react";
import "./footer.css";
import {NavLink} from "react-router-dom";
export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
               <ul>
                   <li>
                       <NavLink to="/home">
                            <i class="iconfont">&#xe61f;</i>
                            <span>首页</span>
                       </NavLink>
                   </li>
                   <li>
                        <NavLink to="/drug">
                            <i class="iconfont">&#xe61e;</i>
                            <span>找药</span>
                        </NavLink>
                   </li>
                   <li>
                        <NavLink to="/car">
                            <i class="iconfont">&#xe60c;</i>
                            <span>购物车</span>
                        </NavLink>
                   </li>
                   <li>
                        <NavLink to="/my">
                            <i class="iconfont">&#xe639;</i>
                            <span>我的</span>
                        </NavLink>
                   </li>
               </ul>
            </div>
        )
    }
}
