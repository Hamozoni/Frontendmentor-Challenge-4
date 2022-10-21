let ouput = document.getElementById("output");
let ouputSpan = document.querySelector(".output-container span");
let delBtn = document.getElementById("delBtn");
let resetBtn = document.getElementById("resetBtn");
let equalBtn = document.getElementById("equalBtn");

let themeUl = document.getElementById("themeUl");
let allbullets = document.querySelectorAll("header ul li");

let cssRoot = document.querySelector(":root");

let bulletsIndex = allbullets.length;
let indexOf = 2;
if (window.localStorage.getItem("theme") === null) {
  window.localStorage.setItem("theme", indexOf);
};

themeUpdate();
themeUl.onclick = function () {
  allbullets.forEach((e) => {
    e.classList.remove("active");
  });

  if (indexOf < bulletsIndex && indexOf >= 0) {
    indexOf += 1;
    window.localStorage.setItem("theme", indexOf);
  };
  if (indexOf === bulletsIndex) {
    indexOf = 0;
    window.localStorage.setItem("theme", indexOf);
  };
  themeUpdate();
};

function themeUpdate() {
  allbullets[+window.localStorage.getItem("theme")].classList.add("active");
  if (window.localStorage.getItem("theme") === "0") {
    cssRoot.style.setProperty("--main-background", "hsl(222, 26%, 31%)");
    cssRoot.style.setProperty("--keypad-background", "hsl(223, 31%, 20%)");
    cssRoot.style.setProperty("--screen-background", "hsl(224, 36%, 15%)");

    cssRoot.style.setProperty("--key-background", "hsl(225, 21%, 49%)");
    cssRoot.style.setProperty("--key-shadow", "hsl(224, 28%, 35%)");
    cssRoot.style.setProperty(
      "--Red-key-background-toggle",
      "hsl(6, 63%, 50%)"
    );
    cssRoot.style.setProperty("--dark-red-key-shadow", "hsl(6, 70%, 34%)");
    cssRoot.style.setProperty(
      "--light-grayish-orange-key-background",
      "hsl(30, 25%, 89%)"
    );
    cssRoot.style.setProperty(
      "--grayish-orange-key-shadow",
      "hsl(28, 16%, 65%)"
    );

    cssRoot.style.setProperty("--very-dark-grayish-blue", "hsl(221, 14%, 31%)");
    cssRoot.style.setProperty("--white", "hsl(0, 0%, 100%)");
    cssRoot.style.setProperty("--output-color", "hsl(0, 0%, 100%)");
  }
  if (window.localStorage.getItem("theme") === "1") {
    cssRoot.style.setProperty("--main-background", "hsl(0, 0%, 90%)");
    cssRoot.style.setProperty("--keypad-background", "hsl(0, 5%, 81%)");
    cssRoot.style.setProperty("--screen-background", "hsl(0, 0%, 93%)");

    cssRoot.style.setProperty("--key-background", "hsl(185, 42%, 37%)");
    cssRoot.style.setProperty("--key-shadow", "hsl(185, 58%, 25%)");
    cssRoot.style.setProperty(
      "--Red-key-background-toggle",
      "hsl(25, 98%, 40%)"
    );
    cssRoot.style.setProperty("--dark-red-key-shadow", "hsl(25, 99%, 27%)");
    cssRoot.style.setProperty(
      "--light-grayish-orange-key-background",
      "hsl(45, 7%, 89%)"
    );
    cssRoot.style.setProperty(
      "--grayish-orange-key-shadow",
      "hsl(35, 11%, 61%)"
    );

    cssRoot.style.setProperty("--very-dark-grayish-blue", "hsl(221, 14%, 31%)");
    cssRoot.style.setProperty("--white", "hsl(0, 0%, 100%)");
    cssRoot.style.setProperty("--output-color", "hsl(221, 14%, 31%)");
  }
  if (window.localStorage.getItem("theme") === "2") {
    cssRoot.style.setProperty("--main-background", "hsl(268, 75%, 9%)");
    cssRoot.style.setProperty("--keypad-background", "hsl(268, 71%, 12%)");
    cssRoot.style.setProperty("--screen-background", "hsl(268, 71%, 12%)");

    cssRoot.style.setProperty("--key-background", "hsl(281, 89%, 26%)");
    cssRoot.style.setProperty("--key-shadow", "hsl(285, 91%, 52%)");
    cssRoot.style.setProperty(
      "--Red-key-background-toggle",
      "hsl(176, 100%, 44%)"
    );
    cssRoot.style.setProperty("--dark-red-key-shadow", "hsl(177, 92%, 70%)");
    cssRoot.style.setProperty(
      "--light-grayish-orange-key-background",
      "hsl(268, 47%, 21%)"
    );
    cssRoot.style.setProperty(
      "--grayish-orange-key-shadow",
      " hsl(290, 70%, 36%)"
    );

    cssRoot.style.setProperty("--very-dark-grayish-blue", "hsl(52, 100%, 62%)");
    cssRoot.style.setProperty("--white", "hsl(0, 0%, 100%)");
    cssRoot.style.setProperty("--output-color", "hsl(52, 100%, 62%)");
  };
};

let calc = {
  previuos: "",
  current: "",
  finalResult: "",
  oper: "",
  operaterMult: "",
  operaterTrigger: true,
  operater: true,
  operToEqual: true,
  operaterMultp: false,
};

function del() {
  if (
    calc.previuos.length > 0 &&
    calc.operToEqual &&
    calc.operater &&
    calc.finalResult === ""
  ) {
    calc.previuos = calc.previuos.split("");
    calc.previuos.length = calc.previuos.length - 1;
    calc.previuos = calc.previuos.join("");
    ouput.innerHTML = calc.previuos || 0;
  };
  if (
    calc.current.length > 0 &&
    calc.operToEqual == false &&
    calc.operater == false
  ) {
    calc.current = calc.current.split("");
    calc.current.length = calc.current.length - 1;
    calc.current = calc.current.join("");
    ouput.innerHTML = calc.current || 0;
  }
};

function final(op) {
  if (op === "+" && calc.current.length > 0) {
    calc.operaterMult = "+";
    calc.finalResult =
      parseFloat(calc.previuos || 0) + parseFloat(calc.current || 0);
    ouput.innerHTML = calc.finalResult;
    calc.previuos = "";
    calc.current = "";
  }
  if (op === "-" && calc.current.length > 0) {
    calc.operaterMult = "-";
    calc.finalResult =
      parseFloat(calc.previuos || 0) - parseFloat(calc.current || 0);
    ouput.innerHTML = calc.finalResult;
    calc.previuos = "";
    calc.current = "";
  }
  if (op === "/" && calc.current.length > 0) {
    calc.operaterMult = "/";
    calc.finalResult =
      parseFloat(calc.previuos || 0) / parseFloat(calc.current || 0);
    ouput.innerHTML = calc.finalResult;
    calc.previuos = "";
    calc.current = "";
  }
  if (op === "*" && calc.current.length > 0) {
    calc.operaterMult = "*";
    calc.finalResult =
      parseFloat(calc.previuos || 0) * parseFloat(calc.current || 0);
    ouput.innerHTML = calc.finalResult;
    calc.previuos = "";
    calc.current = "";
  };
};

function adding(n) {
  if (calc.operater) {
    if (calc.operaterTrigger === false) {
      calc.previuos = calc.finalResult;
      ouput.innerHTML = calc.previuos;
    } else {
      calc.previuos += n;
      ouput.innerHTML = calc.previuos;
    }
  } else {
    calc.current += n;
    ouput.innerHTML = calc.current;
  }
  if (calc.operaterMultp) {
    calc.previuos = calc.finalResult;
    calc.current += n;
    ouput.innerHTML = calc.current;
    operaterToggle(calc.operaterMult);
  };
};

function operaterToggle(o) {
  if (calc.operToEqual) {
    if (calc.operaterTrigger === false) {
      calc.previuos = calc.finalResult;
      ouput.innerHTML = calc.current;
      calc.operaterTrigger = true;
    }
    calc.operater = false;
    ouputSpan.innerHTML = `${calc.previuos} ${o}`;
    ouput.innerHTML = 0;
    calc.oper = o;
    calc.operToEqual = false;
    calc.operaterMultp = false;
  } else {
    equalize();
    calc.operToEqual = true;
    calc.operaterMultp = true;
  };
};

equalBtn.onclick = equalize;

function equalize() {
  calc.operaterTrigger = false;
  calc.operater = true;
  ouputSpan.innerHTML = "";
  final(calc.oper);
};

function getPreviuos(n) {
  if (
    calc.previuos.toString().includes(".") &&
    calc.operToEqual &&
    calc.operater &&
    n === "."
  ) {
    return;
  }
  if (calc.previuos === "" && calc.operToEqual && calc.operater && n === "0") {
    return;
  }
  if (
    calc.current.toString().includes(".") &&
    calc.operToEqual == false &&
    calc.operater == false &&
    n === "."
  ) {
    return;
  }
  if (
    calc.current === "" &&
    calc.operToEqual == false &&
    calc.operater == false &&
    n === "0"
  ) {
    return;
  } else {
    adding(n);
  };
};

document.addEventListener("keyup", (e) => {
  if (!isNaN(parseFloat(e.key))) {
    getPreviuos(e.key);
  }
  if (e.key == "+" || e.key == "*" || e.key == "-" || e.key == "/") {
    operaterToggle(e.key);
  }
  if (e.key == "Enter") {
    equalize();
  }
  if (e.key == "Backspace") {
    del();
  }
});

delBtn.onclick = del;

resetBtn.onclick = function () {
  location.reload();
};
