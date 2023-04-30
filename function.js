//переводит числа в российский формат
function ruNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
var today = getDate()
//получает текущую дату
function getDate() {
  today = new Date();
  today.setDate(today.getDate());
  return Utilities.formatDate(today, 'GMT+03:00', 'dd.MM.yyyy');
}

//проверяет, является ли содержимое датой
function validDate(value)
{
  var arrD = value.split(".");
  arrD[1] -= 1;
  var d = new Date(arrD[2], arrD[1], arrD[0]);
  if ((d.getFullYear() == arrD[2]) && (d.getMonth() == arrD[1]) && (d.getDate() == arrD[0])) {
    return true;
  }
}
