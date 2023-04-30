var history_status = HISTORY.getRange('B3:M18').getDisplayValues();
var vehicle_char = LIST.getRange('B3:I162').getDisplayValues();

function gsGetNum () {
  return vehicleNum
}

function vehicle_info () {
  var status = (VEHICLE.getRange('T6').getDisplayValues() != undefined) ? VEHICLE.getRange('T6').getDisplayValues() : '1';
  var stat_start = (VEHICLE.getRange('U7').getDisplayValues() != undefined) ? VEHICLE.getRange('U7').getDisplayValues() : '1';
  var stat_finish = (VEHICLE.getRange('Z7').getDisplayValues() != undefined) ? VEHICLE.getRange('Z7').getDisplayValues() : '1';
  var location = (VEHICLE.getRange('T4').getDisplayValues() != undefined) ? VEHICLE.getRange('T4').getDisplayValues() : '1';
  var loc_start = (VEHICLE.getRange('U5').getDisplayValues() != undefined) ? VEHICLE.getRange('U5').getDisplayValues() : '1';
  var loc_finish = (VEHICLE.getRange('Z5').getDisplayValues() != undefined) ? VEHICLE.getRange('Z5').getDisplayValues() : '1';
  var mileage = (VEHICLE.getRange('M7').getDisplayValues() != undefined) ? VEHICLE.getRange('M7').getDisplayValues() : '1';
  for (let i = 0; i < vehicle_char.length; i++) {
    if ((vehicle_char[i]).indexOf(String(vehicleNum)) == 0) {
      var grz = vehicle_char[i][4]
      var name = vehicle_char[i][2]
      var year = vehicle_char[i][3]
      var gnum = vehicle_char[i][5]
      var color = vehicle_char[i][6]
      var vin = vehicle_char[i][7]
      return {grz, name, year, gnum, color, vin, status, stat_start, stat_finish, location, loc_start, loc_finish, mileage}
    }
  }
}

var vh_dateArray = []
var vh_status = []
var vh_loc = []
var vh_finish_date = []
var vh_note = []
var vh_staff = []

function test1212 () {
  var array = ['1','2']
  array.push
}

function vehicle_history () {
  var vhs = VEHICLE.getRange('C11:AC29').getDisplayValues()
  for (let row = 0; row < vhs.length; row++) {
    vh_dateArray.push(vhs[row][0])
    vh_status.push(vhs[row][3])
    vh_loc.push(vhs[row][8])
    vh_finish_date.push(vhs[row][13])
    vh_note.push(vhs[row][19])
    vh_staff.push(vhs[row][23])
  }
  return {vh_dateArray, vh_status, vh_loc, vh_finish_date, vh_note, vh_staff}
}

function write (endDate,mileage,newStatus,newObject,comment) {
  var num = HISTORY.getRange('B3').getValue();
  HISTORY.insertRowsBefore(3,1);
  HISTORY.getRange('B3').setValue(num+1);
  HISTORY.getRange('C3').setValue(getDate());
  HISTORY.getRange('E3').setValue(vehicleNum);
  HISTORY.getRange('F3').setValue(newStatus);
  HISTORY.getRange('G3').setValue(endDate);
  HISTORY.getRange('H3').setValue(newObject);
  HISTORY.getRange('I3').setValue(comment);
  HISTORY.getRange('J3').setValue(mileage);
}

function setStatus () {
  var num = HISTORY.getRange('B3').getValue();
  HISTORY.insertRowsBefore(3,1);
  HISTORY.getRange('B3').setValue(num+1);
  HISTORY.getRange('C3').setValue(getDate());
  //HISTORY.getRange('D3').setValue(user);
  HISTORY.getRange('E3').setValue(vehicleNum);
  HISTORY.getRange('F3').setValue(newStatus);
  HISTORY.getRange('G3').setValue(endDate);
  HISTORY.getRange('H3').setValue(newObject);
  HISTORY.getRange('I3').setValue(comment);
  // VEHICLE.getRange('AI15').setValue('Статус записан');
}


