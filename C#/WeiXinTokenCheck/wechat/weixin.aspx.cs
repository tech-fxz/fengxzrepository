using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Web.Security;

namespace wechat
{
    public partial class weixin : System.Web.UI.Page
    {
        /// <summary>
        /// 验证微信签名
        /// </summary>
        /// <returns></returns>
        /// * 将token、timestamp、nonce三个参数进行字典序排序
        /// * 将三个参数字符串拼接成一个字符串进行sha1加密
        /// * 开发者获得加密后的字符串可与signature对比，标识该请求来源于微信。
        private bool CheckSignature()
        {
            string WeChat_Token = "fxz123";
            string WeChat_Key = Request.QueryString["key"];

            //从微信服务器接收传递过来的数据
            string signature = Request.QueryString["signature"]; //微信加密签名
            string timestamp = Request.QueryString["timestamp"];//时间戳
            string nonce = Request.QueryString["nonce"];//随机数
            string[] ArrTmp = { WeChat_Token, timestamp, nonce };
            Array.Sort(ArrTmp);     //字典排序
            string tmpStr = string.Join("", ArrTmp);//将三个字符串组成一个字符串
            tmpStr = FormsAuthentication.HashPasswordForStoringInConfigFile(tmpStr, "SHA1");//进行sha1加密
            tmpStr = tmpStr.ToLower();
            //加过密的字符串与微信发送的signature进行比较，一样则通过微信验证，否则失败。
            if (tmpStr == signature)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        /// <summary>
        /// 验证微信API接口
        /// </summary>
        private void CheckWeChat()
        {
            string echoStr = Request.QueryString["echoStr"];

            if (CheckSignature())
            {
                if (!string.IsNullOrEmpty(echoStr))
                {
                    Response.Write(echoStr);
                    Response.End();
                }
            }
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            //微信通过get请求验证api接口
            CheckWeChat();
        }
    }
}