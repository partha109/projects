using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Lab5.DataAccess;
using Lab5.Model;

namespace Lab5.Pages.AcademicRecordManagement
{
    public class EditModel : PageModel
    {
        private readonly Lab5.DataAccess.StudentrecordContext _context;

        public EditModel(Lab5.DataAccess.StudentrecordContext context)
        {
            _context = context;
        }


        // Bind the academic record to the form userinput grade
        [BindProperty]
        public Academicrecord Academicrecord { get; set; } = default!;

        // create student and course 
        public Student Student { get; set; } = default!;
        public Course Course { get; set; } = default!;


        // Store the user selection of orderby
        public string OrderBy { get; set; }


        public async Task<IActionResult> OnGetAsync(string studentId, string courseCode)
        {
            if (studentId == null || courseCode == null)
            {
                return NotFound();
            }

            // Retrieve OrderBy from session and set it to ViewData
            if (HttpContext.Session.GetString("orderby") != null)
            {
                OrderBy = HttpContext.Session.GetString("orderby");
            }


            // retrieve student and course by the id and code from DB
            Student = await _context.Students.FirstOrDefaultAsync(s => s.Id == studentId);
            Course = await _context.Courses.FirstOrDefaultAsync(c => c.Code == courseCode);


            // retrieve academicrecord by the id and code from dB
            var academicrecord = await _context.Academicrecords.FirstOrDefaultAsync(m => m.StudentId == studentId && m.CourseCode == courseCode);
            if (academicrecord == null)
            {
                return NotFound();
            }

            Academicrecord = academicrecord;

            ViewData["CourseCode"] = new SelectList(_context.Courses, "Code", "Code");
            ViewData["StudentId"] = new SelectList(_context.Students, "Id", "Id");
            return Page();
        }

        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync()
        {

            // retrieve the academic record that want to change            
            Academicrecord academicrecord = await _context.Academicrecords
                .FirstOrDefaultAsync(m => m.StudentId == Academicrecord.StudentId && m.CourseCode == Academicrecord.CourseCode);

            // save the new result to academic record Grade
            academicrecord.Grade = Academicrecord.Grade;

            // save to the DB
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AcademicrecordExists(Academicrecord.StudentId, Academicrecord.CourseCode))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            // return to index with Query String orderby
            return RedirectToPage("Index", new { orderBy = OrderBy });
        }

        private bool AcademicrecordExists(string studentId, string courseCode)
        {
            return _context.Academicrecords.Any(e => e.StudentId == studentId && e.CourseCode == courseCode);
        }


    }
}
