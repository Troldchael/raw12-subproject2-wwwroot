namespace DataServiceLib.Moviedata
{
    public class MovieCompare
    {
        //properties
        public Movies TitleId { get; set; }
        public Movies PrimaryTitle { get; set; }

        //navigation properties
        public Genres Genre { get; set; }
        public Details Startyear { get; set; }
        public Details EndYear { get; set; }
        public Details RunTimeMinutes { get; set; } //int? used to fix that some values are null in the DB
        public Actors Nconst { get; set; }
        public Actors PrimaryName { get; set; }

    }
}