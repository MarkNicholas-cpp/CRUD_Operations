export interface StudentDetails {
  Name: String;
  RollNumber: String;
}
export interface UniqueConstraintError {
  errorNum: Number;
  offset: Number;
}
export interface InsertedSuccess {
  lastRowid: String;
  rowsAffected: Number;
}
export interface Read {
    Result: [];
}
