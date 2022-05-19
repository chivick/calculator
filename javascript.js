function getLastNum() {
  var dis = getDisplayVal().split(" ");
  var lnum = dis[dis.length - 1];
  return lnum;
}


function setLastNum(n) {
  const displayArr = getDisplayVal().split(" ");
  displayArr[displayArr.length - 1] = n;
  setDisplayVal(displayArr.join(" "));
}


function getDisplayVal() {
  return document.getElementById("calcDisplay").innerHTML;
}


function setDisplayVal(value) {
  document.getElementById("calcDisplay").innerHTML = value;
}

function findSinCos() {  
  let ln = getLastNum();
  if (ln.includes("Sin")) {
    setLastNum(Math.sin(Number(ln.slice(3,ln.length))).toFixed(3));
  }
  
  if (ln.includes("Cos")) {
    setLastNum(Math.cos(Number(ln.slice(3,ln.length))).toFixed(3));
  }
  else { }
}

function displayNum(n) {
  if (getDisplayVal() == "0") {
    setDisplayVal(String(n));
  }
  else {
    setDisplayVal(getDisplayVal() + String(n));
  }
}

function displayOperator(op) {
  findSinCos();
  setDisplayVal(getDisplayVal() + " " + op + " ");
}

function clearDisplay() {
  setDisplayVal("0");
}

function displayResult(){
  findSinCos();
  setDisplayVal(eval(getDisplayVal()));
}


function findPercentage() {
  setLastNum(String(eval(getLastNum() / 100)));
}


var isSin = true;

function sinCos() {
  if (isSin == true) {
    if(getLastNum() != "Sin" && getLastNum() != "Cos"){
      if (getDisplayVal() == "0") {
        setDisplayVal("Sin");
      }
      else {
        setDisplayVal(getDisplayVal() + ("Sin"));
      }
    }
    else {
      setLastNum("Sin");
    }
    
  }
  else {
    if(getLastNum() != "Sin" && getLastNum() != "Cos"){
      if (getDisplayVal() == "0") {
        setDisplayVal("Cos");
      }
      else {
        setDisplayVal(getDisplayVal() + ("Cos"));
      }
    }
    else {
      setLastNum("Cos");
    }
  }
  isSin = !isSin;
}