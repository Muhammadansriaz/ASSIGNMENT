var array = [];
var x = 0;
function Add() {
  var name = document.getElementById("name").value;
  var city = document.getElementById("slect").value;
  var pic = document.getElementById("pic").files[0];
  var show = URL.createObjectURL(pic);
  var reader = new FileReader();
  reader.addEventListener("load", () => {
    var email = document.getElementById("email").value;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var result = re.test(email);
    if (result == true) {
      var table = document.getElementById("table");
      table.className = "table";
      var tr = document.createElement("tr");
      x = x + 1;
      tr.className = "xyz";
      var td = document.createElement("td");
      td.innerText = name;
      var td_2 = document.createElement("td");
      td_2.innerText = email;
      var td_3 = document.createElement("td");
      td_3.innerText = city;
      var td_4 = document.createElement("td");
      var img = document.createElement("img");
      img.src = show;
      img.className = "img";
      var button = document.createElement("button");
      button.innerText = "Remove";
      button.setAttribute("onclick", "dell_row(this)");
      var edit_button = document.createElement("button");
      edit_button.innerText = "EDIT";
      edit_button.setAttribute("onclick", "edit(this)");
      table.appendChild(tr).appendChild(td);
      table.appendChild(tr).appendChild(td_2);
      table.appendChild(tr).appendChild(td_3);
      table.appendChild(tr).appendChild(td_4).appendChild(img);
      table.appendChild(tr).appendChild(button);
      table.appendChild(tr).appendChild(edit_button);
     var url = reader.result
      var obj = {};
      obj.name = name;
      obj.email = email;
      obj.city = city;
      obj.pic = url;
      array.push(obj);
      JSON.parse(localStorage.getItem("Users"));
      window.localStorage.setItem("Users", JSON.stringify(array));
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("slect").value = "";
    } else {
      alert("Please enter a valid email");
    }
  });
  reader.readAsDataURL(pic);

  return [name, email, localStorage];
}
function dell_row(p) {
  var table = document.getElementById("table");
  localStorage.clear(p.parentNode);

  if (x == 1) {
    p.parentNode.remove();
    table.className = "hidden";
    x = 0;
  } else {
    p.parentNode.remove();
    x = x - 1;
  }
}
function edit(z) {
  var name = (document.getElementById("name").value =
    z.parentNode.childNodes[0].childNodes[0].nodeValue);
  var email = (document.getElementById("email").value =
    z.parentNode.childNodes[1].childNodes[0].nodeValue);
  var new_value = document.getElementById("name").value;
  document.getElementById("btn").className = "hidden";
  var update = document.createElement("button");
  update.onclick = putt;
  update.innerText = "UPDATE";
  update.className = "update";
  document.childNodes[1].childNodes[2].childNodes[5].appendChild(update);
  dell_row(z);
}
function putt(p) {
  Add();
}
function retriev() {
  localStorage.getItem("Users");
  var m = JSON.parse(localStorage.getItem("Users"));
  for (var i = 0; i < m.length; i++) {
    var table = document.getElementById("table");
    table.className = "table";
    var tr = document.createElement("tr");
    tr.className = "xyz";
    x = x + 1;
    var td = document.createElement("td");
    td.innerText = m[i].name;
    var td_2 = document.createElement("td");
    td_2.innerText = m[i].email;
    var td_3 = document.createElement("td");
    td_3.innerText = m[i].city;
    var td_4 = document.createElement("td");
    var img = document.createElement("img");
    img.className = "img";
    img.src = m[i].pic;
    var button = document.createElement("button");
    button.innerText = "Remove";
    button.setAttribute("onclick", "dell_row(this)");
    var edit_button = document.createElement("button");
    edit_button.innerText = "EDIT";
    edit_button.setAttribute("onclick", "edit(this)");
    table.appendChild(tr).appendChild(td);
    table.appendChild(tr).appendChild(td_2);
    table.appendChild(tr).appendChild(td_3);
    table.appendChild(tr).appendChild(td_4).appendChild(img);
    table.appendChild(tr).appendChild(button);
    table.appendChild(tr).appendChild(edit_button);
  }
}
