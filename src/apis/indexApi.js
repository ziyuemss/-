import {INDEXURL} from "../common/AjaxUrls"
import Api from "../common/Api"

export default  {


    /**
     * 获取主页信息
     * @param url
     * @param cb
     */
    getIndexInfo(cb){
       Api.get(INDEXURL,cb)
    }
}
