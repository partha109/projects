using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Lab5.DataAccess;
using Microsoft.EntityFrameworkCore;

namespace Lab5.Pages.AcademicRecordManagement
{
    public class CreateModel : PageModel
    {
        private readonly Lab5.DataAccess.StudentrecordContext _context;

        public CreateModel(Lab5.DataAccess.StudentrecordContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Academicrecord Academicrecord { get; set; } = default!;

        public List<SelectListItem> StudentList { get; set; }
        public List<SelectListItem> CourseList { get; set; }

        public string ErrorMsg { get; set; }
        public string OrderBy { get; set; }

        public async Task<IActionResult> OnGetAsync()
        {
            await PopulateDropdownListsAsync();
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (_context.Academicrecords.Any(x => x.StudentId == Academicrecord.StudentId && x.CourseCode == Academicrecord.CourseCode))
            {
                ErrorMsg = "The specific academic record already exists!";
                await PopulateDropdownListsAsync(); // Re-populate the dropdown lists
                return Page();
            }

            if (!ModelState.IsValid)
            {
                await PopulateDropdownListsAsync(); // Re-populate the dropdown lists
                return Page();
            }

            _context.Academicrecords.Add(Academicrecord);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }

        private async Task PopulateDropdownListsAsync()
        {
            var courseSelectList = await _context.Courses
                .Select(c => new SelectListItem
                {
                    Value = c.Code,
                    Text = $"{c.Code} - {c.Title}"
                })
                .ToListAsync();

            var studentSelectList = await _context.Students
                .Select(s => new SelectListItem
                {
                    Value = s.Id,
                    Text = $"{s.Id} - {s.Name}"
                })
                .ToListAsync();

            CourseList = courseSelectList;
            StudentList = studentSelectList;

            // Add default "Select one" option
            CourseList.Insert(0, new SelectListItem { Value = "", Text = "Select one" });
            StudentList.Insert(0, new SelectListItem { Value = "", Text = "Select one" });
        }
    }
}