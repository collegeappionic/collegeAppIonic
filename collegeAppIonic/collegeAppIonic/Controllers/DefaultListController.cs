using collegeAppIonic.tools;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace collegeAppIonic.Controllers
{
  public class DefaultListController : ApiController
  {
    // GET: api/DefaultList
    public IEnumerable<string> Get()
    {
      return new string[] { "value1", "value2" };
    }

    // GET: api/DefaultList/5
    public string Get(int id)
    {
      return "value";
    }

    // POST: api/DefaultList
    public dynamic Post(dynamic postData)
    {
      JObject jobj = postData;
      appConfig.getAppConfig();
      string s = "";
      return s;
    }

    // PUT: api/DefaultList/5
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE: api/DefaultList/5
    public void Delete(int id)
    {
    }
  }
}
