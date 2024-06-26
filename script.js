var root = {
  wavecolor: {
    r: 125,
    g: 52,
    b: 253,
  },
  wrappercolor: {
    r: 2,
    g: 255,
    b: 0,
  },
  bagcolor: {
    r: 2,
    g: 255,
    b: 0,
  },
  rainbowSpeed: 0.5,
  rainbow: true,
  borderRadius: 100,
  scaleWrapper: 0.5,
  wrapperPadding: 30,
  bordercheck: false,
  clockCheck: true,
  VerticalHorizontal: false,
  matrixspeed: 50,
};

var c = document.getElementById("c");
var ctx = c.getContext("2d");
var wrappers = document.querySelectorAll(".wrapper");

var hueFw = false;
var hue = -0.01;

// making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

// the characters
var konkani =
  "゠アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレワヰヱヲンヺ・ーヽヿ0123456789";
// converting the string into an array of single characters
var characters = konkani.split("");
var font_size = 14;
var columns = c.width / font_size; // number of columns for the rain
var gradient = ctx.createLinearGradient(0, 10, 0, 200);
// an array of drops - one per column
var drops = [];
// x below is the x coordinate
// 1 = y-coordinate of the drop (same for every drop initially)
for (var x = 0; x < columns; x++) drops[x] = 1;

// drawing the characters
function draw() {
  // Get the BG color based on the current time i.e. rgb(hh, mm, ss)
  // translucent BG to show trail

  ctx.fillStyle = "rgba(0,0,0, 0.05)";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = "#BBB"; // grey text
  ctx.font = font_size + "px arial";

  // looping over drops
  for (var i = 0; i < drops.length; i++) {
    // background color
    ctx.fillStyle = "rgba(10,10,10, 1)";
    ctx.fillRect(i * font_size, drops[i] * font_size, font_size, font_size);
    // a random chinese character to print
    var text = characters[Math.floor(Math.random() * characters.length)];
    // x = i * font_size, y = value of drops[i] * font_size

    if (root.rainbow) {
      hue += hueFw ? 0.01 : -0.01;
      var rr = Math.floor(127 * Math.sin(root.rainbowSpeed * hue + 0) + 128);
      var rg = Math.floor(127 * Math.sin(root.rainbowSpeed * hue + 2) + 128);
      var rb = Math.floor(127 * Math.sin(root.rainbowSpeed * hue + 4) + 128);
      ctx.fillStyle = "rgba(" + rr + "," + rg + "," + rb + ")";
    } else {
      ctx.fillStyle =
        "rgba(" +
        root.wavecolor.r +
        "," +
        root.wavecolor.g +
        "," +
        root.wavecolor.b +
        ")";
    }

    ctx.fillText(text, i * font_size, drops[i] * font_size);
    // Incrementing Y coordinate
    drops[i]++;
    // sending the drop back to the top randomly after it has crossed the screen
    // adding randomness to the reset to make the drops scattered on the Y axis
    if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;
  }
}

function clokcheck() {
  if (root.clockCheck) {
    wrappers.forEach((wrapper) => {
      wrapper.style.display = "flex";
    });
  } else {
    wrappers.forEach((wrapper) => {
      wrapper.style.display = "none";
    });
  }
}

function updateWrapperColor() {
  // Обновляем цвет фона всех элементов .wrapper
  wrappers.forEach((wrapper) => {
    wrapper.style.color =
      "rgba(" +
      root.wrappercolor.r +
      "," +
      root.wrappercolor.g +
      "," +
      root.wrappercolor.b +
      ")";
  });
  
}

function updateWrapperRadius() {
  // Обновляем стили для всех элементов .wrapper
  wrappers.forEach((wrapper) => {
    if (root.bordercheck) {
      wrapper.style.backgroundColor =
        "rgba(" +
        root.bagcolor.r +
        "," +
        root.bagcolor.g +
        "," +
        root.bagcolor.b +
        ")";
      wrapper.style.borderRadius = `${root.borderRadius}px`;
      wrapper.style.padding = `${root.wrapperPadding}px`;
    } else {
      wrapper.style.backgroundColor = "transparent";
    }
  });
}

function scalewrap() {
  wrappers.forEach((wrapper) => {
    wrapper.style.transform = `translate(-50%, -50%) scale(${
      root.scaleWrapper / 10
    })`;
  });
}

function horizontal() {
  if (root.VerticalHorizontal) {
    wrappers.forEach((wrapper) => {
      wrapper.classList.add("horizontal");
    });
    minutes.forEach((minute) => {
      minute.classList.add("minutes");
    });
  } else {
    wrappers.forEach((wrapper) => {
      wrapper.classList.remove("horizontal");
    });
    minutes.forEach((minute) => {
      minute.classList.remove("minutes");
    });
  }
}

window.onresize = () => {
  location.reload();
};

setInterval(draw, root.matrixspeed);

function livelyPropertyListener(name, val) {
  switch (name) {
    case "matrixColor":
      root.wavecolor = hexToRgb(val);
      break;
    case "dateColor":
      root.wrappercolor = hexToRgb(val);
      updateWrapperColor();
      break;
    case "bagColor":
      root.bagcolor = hexToRgb(val);
      updateWrapperRadius();
      break;
    case "rainBow":
      root.rainbow = val;
      break;
    case "rainbowSpeed":
      root.rainbowSpeed = val / 100;
      break;
    case "bordercheck":
      root.bordercheck = val;
      updateWrapperRadius();
      break;
    case "clockCheck":
      root.clockCheck = val;
      clokcheck();
      break;
    case "VerticalHorizontal":
      root.VerticalHorizontal = val;
      horizontal();
      break;
    case "borderRadius":
      root.borderRadius = val;
      updateWrapperRadius();
      break;
    case "wrapperPadding":
      root.wrapperPadding = val;
      updateWrapperRadius();
      break;
    case "scaleWrapper":
      root.scaleWrapper = val;
      scalewrap();
      break;
  }
}
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
