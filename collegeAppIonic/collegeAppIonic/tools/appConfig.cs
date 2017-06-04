using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace collegeAppIonic.tools
{
  public static class appConfig
  {
    private static JObject appConfigJson = new JObject();
    public static JObject getDefaultList()
    {
      if (!appConfigJson.HasValues)
      {
        string json = File.ReadAllText(HttpContext.Current.Server.MapPath("~/www/assets/config/defaultList.json"));
        appConfigJson = (JObject)JsonConvert.DeserializeObject(json);
      }
      return appConfigJson;
    }
  }
}