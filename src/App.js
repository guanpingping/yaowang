import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

/* 引入reset和flexble.js */
import "./common/css/reset.css";
import "./common/js/flexble.js";
/* 引入iconfont */
import "./common/css/iconfont/iconfont.css"
/* 引入懒加载依赖*/
import Loadable from "react-loadable";
import Loading from "./components/loading";

/* 引入底部 */
import Footer from "./components/footer";
/* 引入组件 路由懒加载*/
let Home = Loadable({
  loader: () => import("./components/home"),
  loading: Loading
})
let Drug = Loadable({
  loader: () => import("./components/drug"),
  loading: Loading
})
let Goodscar = Loadable({
  loader: () => import("./components/goodscar"),
  loading: Loading
})
let My = Loadable({
  loader: () => import("./components/my"),
  loading: Loading
})



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Fragment>
            <Switch>
              {/* 首页 */}
              <Route path="/home" component={Home} />
              {/* 找药 */}
              <Route path="/drug" component={Drug} />
              {/* 购物车 */}
              <Route path="/car" component={Goodscar} />
              {/* 我的 */}
              <Route path="/my" component={My} />
              {/* 错误404 */}
              <Route path="/error" render={(props) => <div><h1>404 NOT Found!</h1></div>} />
              <Route path="/" render={(props) => <Redirect to='/home' />} />
            </Switch>
            <Footer />
          </Fragment>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
