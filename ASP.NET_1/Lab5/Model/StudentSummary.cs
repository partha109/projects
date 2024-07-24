namespace Lab5.Model
{
    public class StudentSummary
    {
        public string Id { get; set; }
        public string studentName { get; set; }
        public int numberOfCourse { get; set; }
        public double average { get; set; }

        public StudentSummary(string Id, string studentName, int courseNumber, double average)
        {
            this.Id = Id;
            this.studentName = studentName;
            this.numberOfCourse = courseNumber;
            this.average = average;
        }
    }
}
