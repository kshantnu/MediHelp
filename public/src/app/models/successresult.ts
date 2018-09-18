export class SuccessResult {
    statusCode : String;
    statusText : String;
    _id:String;
    constructor(_statusCode : String, _statusText : String, _id: String) {
        this.statusCode = _statusCode;
        this.statusText = _statusText;
    }
}