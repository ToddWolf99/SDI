export class Student
{
    constructor()
    {
        this.Id = null;
        this.Firstname = "";
        this.Lastname = "";
        this.DOB = "";
        this.GPA = 0.0;
        //this.Date = Date.now();

        /*public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public Nullable<System.DateTime> DOB { get; set; }
        public Nullable<double> GPA { get; set; }
        */
    }

   public Id: number;
   public Firstname: string;
   public Lastname: string;
   public DOB: string;
   public GPA: number;
  // public Date: number;
}