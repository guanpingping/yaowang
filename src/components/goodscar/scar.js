import React from "react";
import "./common.scss"
import Bscroll from "better-scroll"

class ScarNo extends React.Component {
    render() {
        return (
            <div id="scarNo">
                <div class="cart_ico"><i class="iconfont ">&#xe60c;</i></div>
                <p class="empty_warm">购物车还是空的</p>
                <span class="see_btn">去看看</span>
            </div>
        )
    }
}
class ScarHas extends React.Component {
    render() {
        return (
            <div id="scarHas">

            </div>
        )
    }
}

export default class Scar extends React.Component {
    constructor() {
        super()
    }
    render() {
        let { num, standbyMedicine } = this.props
        console.log(standbyMedicine)
        return (
            <div>
                {num == 0 ? <ScarNo /> : <ScarHas />}
                <div className="scar_other">
                    <h2 className="other_tt"><span className="tt_name">常备用药</span><span>更多<i className="iconfont"></i></span></h2>
                    <div className="scar_box wrapper other_wrapper">
                        <ul className="content">{
                            standbyMedicine.map((item, index) => {
                                return <li key={index}>
                                <div className="scar_other_img"><img src={item.productImgUrl} alt="" /></div>
                                    
                                    <h2 className="standby_name">{item.productName}</h2>
                                    <span className="standby_price">{"￥"+item.nowPrice}</span>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
    componentDidMount(){
        this.bscroll = new Bscroll('.other_wrapper',{
            scrollX:true
        })
    }
}
