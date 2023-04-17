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
export interface Pizza {
  id: Number;
  discription: String;
  img: String;
  name: String;
  price: Number;
  quantity: Number;
  veg: Boolean;
}
