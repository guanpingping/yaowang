const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/api",proxy({
        target:"http://m.111.com.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
}