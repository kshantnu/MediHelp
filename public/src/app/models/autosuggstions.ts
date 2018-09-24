export class AutoSuggestions {
    medicines : Array < object >;
    doctors : Array < object >;
    symptoms : Array < object >;

    constructor(_medicines, _doctors, _symptoms) {
        this.medicines = _medicines;
        this.doctors = _doctors;
        this.symptoms = _symptoms;
    }
}