function myFunction() {
  var currentsheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var values = currentsheet.getDataRange().getValues();
  
  //loop through all rows and send confirmation email.
  for(var i=1; i<values.length;i++)
  {
    if(values[i][3]!="sent")
    {
      var sendemail = GmailApp.sendEmail(values[i][1], "Confirmation Email", "Thank you for registering with us. Your seat has been confirmed!");
      currentsheet.getRange(i+1, 4).setValue("sent");
    }
  }
}
