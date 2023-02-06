const fs = require("fs");
const path = require("path");

function extractCurlyBrackets(str) {
  const regex = /\{(.*)\}/s;
  const match = regex.exec(str);
  if (match) {
    return match[1];
  } else {
    return null;
  }
}

function filePaths(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(filePaths(filePath));
    } else {
      if (
        path.extname(filePath) === ".js" ||
        path.extname(filePath) === ".css"
      ) {
        results.push(filePath);
      }
    }
  });
  return results;
}

function extractOptions(data) {
  let optionsStart = data.indexOf("let options = ");
  let optionsEnd = data.indexOf("};", optionsStart) + 2;
  let options = data.substring(optionsStart, optionsEnd);

  options = options.replace(/'/g, '"');
  options = options.replace(/\n/g, " ");
  options = options.replace(
    `     Authorization: "Basic " + new Buffer.from(token).toString("base64")   },`,
    ""
  );
  options = options.replace(";", "");

  options = `{${extractCurlyBrackets(options)} } `;

  return options;
}

let arquivos = filePaths("original-files/");
let fini = [];

arquivos.forEach((directory) => {
  const fileName = directory.replace(/^.*[\/]/, "").split(".")[0];
  const filePath = path.join(__dirname, directory);
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split("\n");
  const result = {};
  let section = "";

  for (let line of lines) {
    if (line.startsWith("//")) {
      section = line.replace("//", "").replace(/[-]+/g, "").trim();
      continue;
    }

    if (section) {
      result[section] = (result[section] || "") + line;
    }
  }

  const newObject = Object.fromEntries(
    Object.entries(result).map(([key, value]) => [key, extractOptions(value)])
  );

  let arx = Object.entries(newObject);

  let arb = arx.map((currentValue, index) => {
    let resultados =
      currentValue[0] == "Inserir" || currentValue[0] == "Editar"
        ? `${currentValue[0]}: ${currentValue[1]} }`
        : `${currentValue[0]}: ${currentValue[1]}`;

    resultados = resultados.replace(/  |\r\n|\n|\r/gm, "");
    // console.log(resultados);

    // console.log(currentValue[0]);

    // if (currentValue[0] == "Inserir" || currentValue[0] == "Editar") {
    //   resultados = resultados + "}";
    // }

    // switch (currentValue[0]) {
    //   case 'Inserir':

    //     break;

    //   default:
    //     break;
    // }

    return resultados;
  });

  let fileStringObject = ` ${fileName} :{ ${arb.toString()} }`;
  // console.log(fileStringObject);
  fini.push(fileStringObject);
});

// console.log(fini[1]);

// let deu = fini.join("\r\n");
let apiFile = fini.toString();

fs.writeFileSync("teste.js", `var lib = { ${apiFile} }`);

// ----

// etapa final

let vamos = require("./api.js");

function reorder(obj) {
  let newObj = {};
  for (let key in obj) {
    for (let innerKey in obj[key]) {
      if (!newObj[innerKey]) {
        newObj[innerKey] = {};
      }
      newObj[innerKey][key] = obj[key][innerKey];
    }
  }
  return newObj;
}
