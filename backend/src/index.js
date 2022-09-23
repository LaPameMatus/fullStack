require("./dataBase");
const app = require("./App");
async function main() {
  await app.listen(3000, () => console.log("Funcionando"));
}
main();
