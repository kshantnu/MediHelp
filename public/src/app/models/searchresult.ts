export class SearchResult {
    diseases : Array < String >;
    symptoms : Array < String >;
    medicines : Array < String >;
    doctors : Array < String >;
    comments : String;
    _id: String;

    constructor(diseases : Array < String >, symptoms : Array < String >, 
        medicines : Array < String >, 
        doctors : Array < String >, 
        comments : String) {
        this.diseases = diseases;
        this.symptoms = symptoms;
        this.medicines = medicines;
        this.doctors = doctors;
        this.comments = comments;        
    }
}

