using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication2.Controllers
{
    public class StudentController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Create()
        {
            return View();
        }

        public  IActionResult Save()
        {
            //    Console.WriteLine(this.Request.Form["firstname"]);
            //    Console.WriteLine(this.Request.Form["lastname"]);


            return View();
        }
    }
}