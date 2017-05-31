using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace collegeAppIonic.Controllers
{
  public class studentController : ApiController
  {
    // GET: api/student
    public IEnumerable<object> Get()
    {
      List<object> obj = new List<object>();
      obj.Add(new { name = "张三", age = 14 });
      obj.Add(new { name = "李四", age = 58 });
      return obj;
    }

    // GET: api/student/5
    public string Get(int id)
    {
      return "value";
    }

    // POST: api/student
    public void Post([FromBody]string value)
    {
    }

    // PUT: api/student/5
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE: api/student/5
    public void Delete(int id)
    {
    }
  }
}
