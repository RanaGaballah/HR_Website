function myFunction() {
  let text = "Are you sure you want to permanently delete this employee?";
  if (confirm(text) == true ){
    text = "Employee deleted successfully" ;
  }
  else {
    text = "Employee was not deleted"
  }
}