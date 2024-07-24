using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Lab5.DataAccess;

namespace Lab5.Pages.StudentManagement
{
    public class CreateModel : PageModel
    {
        private readonly Lab5.DataAccess.StudentrecordContext _context;

        public CreateModel(Lab5.DataAccess.StudentrecordContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            // Retrieve OrderBy from session and set it to ViewData
            if (HttpContext.Session.GetString("orderby") != null)
            {
                OrderBy = HttpContext.Session.GetString("orderby");
            }

            return Page();
        }


        // catch the Error Message by ErrorMsg String
        public string ErrorMsg { get; set; }

        // Bind the form by Student
        [BindProperty]
        public Student Student { get; set; } = default!;


        // Store the user selection of orderby
        public string OrderBy { get; set; }


        // To protect from overposting attacks, see https://aka.ms/RazorPagesCRUD
        public async Task<IActionResult> OnPostAsync()
        {
            // Valiadation:
            // if there are any student ID from user input, pop up error msg
            if (_context.Students.Any(s => s.Id == Student.Id))
            {
                ErrorMsg = $"Student Id {Student.Id} already exist";

                // get the OrderBy from session
                if (HttpContext.Session.GetString("orderby") != null)
                {
                    OrderBy = HttpContext.Session.GetString("orderby");
                }

                return Page();
            }


            // Get the OrderBy from the session
            if (HttpContext.Session.GetString("orderby") != null)
            {
                OrderBy = HttpContext.Session.GetString("orderby");
            }
            else
            {
                OrderBy = null;
            }

            if (!ModelState.IsValid)
            {
                return Page();
            }


            // Create new student from userinput
            Student newStudent = new Student();
            newStudent.Id = Student.Id;
            newStudent.Name = Student.Name;

            // add new student to DB
            _context.Students.Add(Student);
            await _context.SaveChangesAsync();

            // return to the index page with query string orderby
            return RedirectToPage("./Index", new { orderBy = OrderBy });
        }
    }
}
