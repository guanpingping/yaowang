import {fetch} from "whatwg-fetch";
//获取常备用药列表
export const getStandbyMedicine= ()=>{
    let action = (data)=>({
        type:"GET_STANDBYM",
        value:data,
    })
    return (dispatch)=>{
        fetch("https://gateway.fangkuaiyi.com/mobile/standbyMedicine?token=WEkrakpTa3pwZUh2S2tHVWxjdEN2bE5lUkhsK3VRRnZxVWZodGs2UXRLb2t2NWFuVDBkaHJJbjdON29XYWhOdjBsSG1jNW9aTnFJVFdMdkJTbWtPQkVXeTg4NUtnamR2ZjN4RjhkN2MyZFh2Q3hwMWkybG4yeXUyYWRYSENxeHN5T2M1MGEvR0VtWXBYT3JrNkMyU2RDaUtibXRuZWFqWDUwenkwR01NNTlpZ0Z6cFlFbUlFMmRITHp5dkJFZVNUQTEzUFJpMVZUcjNlb3FURmNCcHNXQT09P2FwcElkPTExMjcma2V5SWQ9MTEyNw%3D%3D&demandcartkey=b0decd92a3bcb22bad2380d7dae699f6&cartkey=b0decd92a3bcb22bad2380d7dae699f6&h5version=100&provinceid=1&province=1&provincename=%E4%B8%8A%E6%B5%B7&cityname=%E4%B8%8A%E6%B5%B7&countyname=%E6%B5%A6%E4%B8%9C%E6%96%B0%E5%8C%BA&tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1550315983125&signature=****&siteid=9&locateProvinceId=2&locateCityName=%E5%8C%97%E4%BA%AC")
        .then(res=>res.json())
        .then((data)=>{
            dispatch(action(data.data.standbyMedicine))
        })
     }
}