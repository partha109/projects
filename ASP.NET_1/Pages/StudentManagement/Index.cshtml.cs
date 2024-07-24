using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Lab5.DataAccess;
using Lab5.Model;

namespace Lab5.Pages.StudentManagement
{
    public class IndexModel : PageModel
    {
        private readonly Lab5.DataAccess.StudentrecordContext _context;

        public IndexModel(Lab5.DataAccess.StudentrecordContext context)
        {
            _context = context;
        }


        // Create Student List and Academicrecord List
        // Create List of class Student Summaries include student id, name, number of course and average
        public IList<Student> Student { get; set; } = default!;
        public IList<Academicrecord> Record { get; set; } = default!;
        public List<StudentSummary> studentSummaries { get; set; } = default!;


        // Store the user selection of orderby
        public string OrderBy { get; set; }


        public async Task<IActionResult> OnGetAsync(string delete, string orderby)
        {
            // retrieve the students and academicrecords from DB
            Student = await _context.Students.ToListAsync();
            Record = await _context.Academicrecords
                .Include(a => a.CourseCodeNavigation)
                .Include(a => a.Student).ToListAsync();

            // invoke GetSummariesAsync function and store the list of studentSummaries
            studentSummaries = await GetSummariesAsync();


            // sort if orderby is exist
            if (!string.IsNullOrEmpty(orderby))
            {
                sortSession(orderby);
            }

            // delete if delete is exist
            // find the student from dB to be delete
            // find the List of Record to be deleted
            // delete the content from DB 
            // return to index page with orderby
            if (!string.IsNullOrEmpty(delete))
            {
                var studentToDelete = await _context.Students.FindAsync(delete);
                var recordToDelete = await _context.Academicrecords.Where(x => x.StudentId == delete).ToListAsync();

                if (studentToDelete != null)
                {
                    _context.Academicrecords.RemoveRange(recordToDelete);
                    _context.Students.Remove(studentToDelete);

                    await _context.SaveChangesAsync();
                }
                return RedirectToPage(new { orderby });

            }

            return Page();
        }


        // NumberOfCourses function to return count the number of studentId in academicrecord as Number of Course
        public int NumberOfCourses(string id)
        {
            return Record.Count(r => r.StudentId == id);
        }


        // AverageGrade function return double of average of grade 
        // create List of double on allGrade, then extract grade from particular student id and add to List
        // return the list.average
        public double AverageGrade(string id)
        {
            List<double> allGrade = new List<double>();
            allGrade = Record.Where(r => r.StudentId == id).Select(r => (double)r.Grade).ToList();
            return allGrade.Any() ? allGrade.Average() : 0.0;
        }


        // function of GetSummariesAsync to return the List of StudentSummary in studentID, Name, Number of Course and Average
        public async Task<List<StudentSummary>> GetSummariesAsync()
        {
            // Create a List of Student Summary
            var summaries = new List<StudentSummary>();

            // get all the number of courses and average grade and store in student summary
            var tasks = Student.Select(async student =>
            {
                int courseNumber = NumberOfCourses(student.Id);
                double averageGrade = AverageGrade(student.Id);

                StudentSummary ss = new StudentSummary(student.Id, student.Name, courseNumber, averageGrade);
                summaries.Add(ss);
            });

            // after all task complete then return the student summary
            await Task.WhenAll(tasks);

            return summaries;
        }


        // sortStudentSummaries function for sort the student summary by order when click with name, number of course and average
        public void SortStudentSummaries(string orderby)
        {
            switch (orderby)
            {
                case "name":
                    studentSummaries = studentSummaries.OrderBy(x => x.studentName).ToList();
                    break;
                case "name_desc":
                    studentSummaries = studentSummaries.OrderByDescending(x => x.studentName).ToList();
                    break;
                case "course":
                    studentSummaries = studentSummaries.OrderBy(x => x.numberOfCourse).ToList();
                    break;
                case "course_desc":
                    studentSummaries = studentSummaries.OrderByDescending(x => x.numberOfCourse).ToList();
                    break;
                case "grade":
                    studentSummaries = studentSummaries.OrderBy(x => x.average).ToList();
                    break;
                case "grade_desc":
                    studentSummaries = studentSummaries.OrderByDescending(x => x.average).ToList();
                    break;
                default:
                    studentSummaries = studentSummaries.OrderBy(x => x.studentName).ToList();
                    break;
            }
        }


        // sortSession function store the sort of orderby in the session and invoke the function SortStudentSummary to sort
        public void sortSession(string orderby)
        {
            if (!string.IsNullOrEmpty(orderby))
            {
                OrderBy = orderby;
                HttpContext.Session.SetString("orderby", orderby);
                SortStudentSummaries(OrderBy);
            }
            else if (HttpContext.Session.GetString("orderby") != null)
            {
                OrderBy = HttpContext.Session.GetString("orderby");
                SortStudentSummaries(OrderBy);
            }
            else
            {
                OrderBy = null;
            }
        }
    }
}
