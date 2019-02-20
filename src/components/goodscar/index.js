import React from "react";
import "./common.scss"
import Scar from "./scar"
import { connect } from "react-redux";
import {getStandbyMedicine} from "../../api/getdata"

class Goodscar extends React.Component{
    render(){
        let {standbyMedicine} = this.props
        return(
            <div id="goodscar">
                <div className="scarHead">
                    <div className="back"><i className="iconfont">&#xe6e1;</i></div>
                    <ul>
                        <li>购物车</li>
                        <li>需求清单</li>
                    </ul>
                    <div className="more">...</div>
                </div>
                <Scar num={0} standbyMedicine={standbyMedicine}/>
            </div>
        )
    }
    componentDidMount(){
        this.props.getStandbyMedicine()
    }
}
const mapStateToProps = (state) => ({
    standbyMedicine: state.getIn(["scar", "standbyMedicine"])
})


const mapDispatchToProps = (dispatch) => ({
    getStandbyMedicine() {
        dispatch(getStandbyMedicine())
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(Goodscar)