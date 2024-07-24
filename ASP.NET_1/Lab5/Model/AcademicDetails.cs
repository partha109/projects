namespace Lab5.Model
{
    public class AcademicDetails
    {
        public string Id { get; set; }
        public string name { get; set; }
        public string courseTitle { get; set; }
        public string courseCode { get; set; }
        public int grade { get; set; }
        public AcademicDetails(string id, string name, string title, string code, int grade)
        {
            this.Id = id;
            this.name = name;
            this.courseTitle = title;
            this.courseCode = code;
            this.grade = grade;
        }
    }
}
