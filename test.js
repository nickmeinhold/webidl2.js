const re = /-?(0([Xx][0-9A-Fa-f]+|[0-7]*)|[1-9][0-9]*)/y;
const result = re.exec('NoDelete]\ninterface b2C');
console.log(result);