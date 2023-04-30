var vehicleNum

function test1 () {
  var act_row = SpreadsheetApp.getActive().getActiveCell().getRow() 
  vehicleNum = ACTLIST.getRange(act_row,2).getDisplayValue()
  if (vehicleNum != undefined && vehicleNum != null && vehicleNum != "") {
    VEHICLE.getRange('C4').setValue(vehicleNum)
    var htmlOutput = HtmlService
      .createHtmlOutputFromFile('vehicle')
      .setWidth(870)
      .setHeight(600)
    SpreadsheetApp.getUi().showModelessDialog(htmlOutput,'Сведения о технике');
  }
}


var today = getDate();
var newStatus = VEHICLE.getRange('AI6').getValue();
var newObject = VEHICLE.getRange('AI4').getValue();
var user = userArray_name[userArray_email.indexOf(Session.getEffectiveUser().getEmail())];
var endDate = Utilities.formatDate(VEHICLE.getRange('AO8').getValue(), 'GMT+03:00', 'dd.MM.yyyy');
var vehicleNum = VEHICLE.getRange('C4').getValue();
var comment = VEHICLE.getRange('AI11').getValue();



function setStatus () {
  var num = HISTORY.getRange('B3').getValue();
  HISTORY.insertRowsBefore(3,1);
  HISTORY.getRange('B3').setValue(num+1);
  HISTORY.getRange('C3').setValue(today);
  HISTORY.getRange('D3').setValue(user);
  HISTORY.getRange('E3').setValue(vehicleNum);
  HISTORY.getRange('F3').setValue(newStatus);
  HISTORY.getRange('G3').setValue(endDate);
  HISTORY.getRange('H3').setValue(newObject);
  HISTORY.getRange('I3').setValue(comment);
  VEHICLE.getRange('AI15').setValue('Статус записан');
}


function test() {
 console.log(today);
 console.log(newStatus);
 console.log(newObject);
 console.log(user);
 console.log(endDate);
}
