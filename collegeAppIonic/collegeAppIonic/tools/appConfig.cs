using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Data.OleDb;

namespace collegeAppIonic.tools
{
  public static class appConfig
  {
    private static JArray appConfigJson = new JArray();
    /// <summary>
    /// 获取通用列表配置信息
    /// </summary>
    /// <param name="category"></param>
    /// <returns></returns>
    public static JToken getDefaultList(string category)
    {
      JToken returnVal = new JObject();
      if (!appConfigJson.HasValues)
      {
        string json = File.ReadAllText(HttpContext.Current.Server.MapPath("~/www/assets/config/defaultList.json"));
        appConfigJson = (JArray)JsonConvert.DeserializeObject(json);
      }
      foreach (var c in appConfigJson)
      {
        if (c["category"].ToString() == category)
        {
          returnVal = c;
        }
      }
      return returnVal;
    }


  }
}