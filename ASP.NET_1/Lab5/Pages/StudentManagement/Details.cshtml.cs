using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Lab5.DataAccess;
using Lab5.Model;
using Mysqlx.Crud;

namespace Lab5.Pages.StudentManagement
{
    public class DetailsModel : PageModel
    {
        private readonly Lab5.DataAccess.StudentrecordContext _context;

        public DetailsModel(Lab5.DataAccess.StudentrecordContext context)
        {
            _context = context;
        }


        // create student retrieve from student id query string
        public Student Student { get; set; } = default!;


        // create List of Course, Academicrecord, and AcademicDetail with student ID, Name, course title, course code and Grade
        public IList<Course> Course { get; set; } = default!;
        public IList<Academicrecord> Record { get; set; } = default!;
        public List<AcademicDetails> Details { get; set; } = default!;


        // Store the user selection of orderby
        public string OrderBy { get; set; }


        public async Task<IActionResult> OnGetAsync(string id, string orderby)
        {
            if (id == null)
            {
                return NotFound();
            }

            // retrieve the student from DB by student ID
            Student = await _context.Students.FirstOrDefaultAsync(m => m.Id == id);

            if (Student == null)
            {
                return NotFound();
            }

            // retrieve the List of Academicrecords student attain
            Record = await _context.Academicrecords.Where(m => m.StudentId == id).ToListAsync();
            // retrieve the List of courses
            Course = await _context.Courses.ToListAsync();

            // invoke the function GetDetailsAsync to get the List of academic record details with ID, name, code, title, grade from particular student
            Details = await GetDetailsAsync();

            // invoke the sort function from user click in query string
            if (!string.IsNullOrEmpty(orderby))
            {
                sortSession(orderby);
            }


            return Page();
        }

        public async Task<List<AcademicDetails>> GetDetailsAsync()
        {
            // create new list of academic details
            var details = new List<AcademicDetails>();
            // store student name
            var name = Student.Name;

            // get the record of particular student and add to details list of academic details
            var tasks = Record.Select(async Record =>
            {
                string title = null;
                foreach (var course in Course)
                {
                    if (course.Code == Record.CourseCode)
                    {
                        title = course.Title;
                    }
                }

                // create new instance of academic details and add the details list
                AcademicDetails ad = new AcademicDetails(Record.StudentId, name, title, Record.CourseCode, (int)Record.Grade);
                details.Add(ad);
            });

            // await to complete the tasks and return the academic details list
            await Task.WhenAll(tasks);

            return details;
        }

        // SortAcademicDetails function for sort the student summary by order when click with course and grade
        public void SortAcademicDetails(string orderby)
        {
            if (orderby == "course")
            {
                Details.Sort((x, y) => x.courseTitle.CompareTo(y.courseTitle));
            }
            else if (orderby == "grade")
            {
                Details.Sort((x, y) => x.grade.CompareTo(y.grade));
            }

        }

        // sortSession function store the sort of orderby in the session and invoke the function SortAcademicDetails to sort
        public void sortSession(string orderby)
        {
            if (!string.IsNullOrEmpty(orderby))
            {
                OrderBy = orderby;
                HttpContext.Session.SetString("orderby", orderby);
                SortAcademicDetails(OrderBy);
            }
            else if (HttpContext.Session.GetString("orderby") != null)
            {
                OrderBy = HttpContext.Session.GetString("orderby");
                SortAcademicDetails(OrderBy);
            }
            else
            {
                OrderBy = null;
            }
        }
    }
}
