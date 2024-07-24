using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Lab5.DataAccess;
using Lab5.Model;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.Blazor;
using Mysqlx.Crud;

namespace Lab5.Pages.AcademicRecordManagement
{
    public class IndexModel : PageModel
    {
        private readonly Lab5.DataAccess.StudentrecordContext _context;

        public IndexModel(Lab5.DataAccess.StudentrecordContext context)
        {
            _context = context;
        }



        // create list of academic record, student and course
        public IList<Academicrecord> Academicrecord { get; set; } = default!;
        public IList<Student> Student { get; set; } = default!;
        public IList<Course> Course { get; set; } = default!;

        // create List of academic details with AllAcademicDetailsRecord
        public List<AcademicDetails> AllAcademicDetailsRecord { get; set; } = default!;


        // Store the user selection of orderby
        public string OrderBy { get; set; }



        public async Task<IActionResult> OnGetAsync(string deleteId, string deleteCode, string orderby)
        {
            // retrieve the academic record, student and course from DB
            Academicrecord = await _context.Academicrecords
                .Include(a => a.CourseCodeNavigation)
                .Include(a => a.Student).ToListAsync();
            Student = await _context.Students.ToListAsync();
            Course = await _context.Courses.ToListAsync();

            // invoke function GetDetailsAsync to AllAcademicDetailsRecord
            AllAcademicDetailsRecord = await GetDetailsAsync();


            // sort if orderby is exist
            if (!string.IsNullOrEmpty(orderby))
            {
                sortSession(orderby);
            }

            // delete if deleteId and deleteCode is exist as this table have two primary keys
            // find the Record to be deleted according to id and code
            // delete the content from DB 
            // return to index page with orderby
            if (!string.IsNullOrEmpty(deleteId) && !string.IsNullOrEmpty(deleteCode))
            {
                var academicRecordToDelete = await _context.Academicrecords.FirstOrDefaultAsync(x => x.StudentId == deleteId && x.CourseCode == deleteCode);

                if (academicRecordToDelete != null)
                {
                    _context.Academicrecords.Remove(academicRecordToDelete);

                    await _context.SaveChangesAsync();
                }
                return RedirectToPage(new { orderby });

            }

            return Page();

        }


        // function of GetDetailsAsync to return the List of AcademicDetails in studentID, Name, Title, Code and Grade
        public async Task<List<AcademicDetails>> GetDetailsAsync()
        {
            // Create a List of Academic Details
            var details = new List<AcademicDetails>();

            // get all the academic record in details
            // filter student from id
            // filter course from code
            // add all the academicdetails to list
            var tasks = Academicrecord.Select(async record =>
            {
                var student = Student.FirstOrDefault(s => s.Id == record.StudentId);
                var course = Course.FirstOrDefault(c => c.Code == record.CourseCode);

                if (student != null && course != null)
                {
                    AcademicDetails ad = new AcademicDetails(record.StudentId, student.Name, course.Title, record.CourseCode, (int)record.Grade);
                    details.Add(ad);
                }
            });


            // after all task complete then return the Academic Details
            await Task.WhenAll(tasks);

            return details;
        }


        // SortAcademicDetails function for sort the Academic Details by order when click with name, course and grade
        public void SortAcademicDetails(string orderby)
        {
            switch (orderby)
            {
                case "course":
                    AllAcademicDetailsRecord = AllAcademicDetailsRecord.OrderBy(x => x.courseTitle).ToList();
                    break;
                case "course_desc":
                    AllAcademicDetailsRecord = AllAcademicDetailsRecord.OrderByDescending(x => x.courseTitle).ToList();
                    break;
                case "grade":
                    AllAcademicDetailsRecord = AllAcademicDetailsRecord.OrderBy(x => x.grade).ToList();
                    break;
                case "grade_desc":
                    AllAcademicDetailsRecord = AllAcademicDetailsRecord.OrderByDescending(x => x.grade).ToList();
                    break;
                case "name":
                    AllAcademicDetailsRecord = AllAcademicDetailsRecord.OrderBy(x => x.name).ToList();
                    break;
                case "name_desc":
                    AllAcademicDetailsRecord = AllAcademicDetailsRecord.OrderByDescending(x => x.name).ToList();
                    break;
                default:
                    AllAcademicDetailsRecord = AllAcademicDetailsRecord.OrderBy(x => x.courseTitle).ToList();
                    break;
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
