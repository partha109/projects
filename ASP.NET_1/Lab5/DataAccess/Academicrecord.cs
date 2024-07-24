using System;
using System.Collections.Generic;

namespace Lab5.DataAccess;

public partial class Academicrecord
{
    public string StudentId { get; set; } = null;
    public string CourseCode { get; set; } = null;
    public int? Grade { get; set; }

    public virtual Student Student { get; set; } = null!;
    public virtual Course CourseCodeNavigation { get; set; } = null!;
}
