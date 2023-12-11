import minimist from "minimist";
import prompts from "prompts";

const args = minimist(process.argv.slice(2));
const cwd = process.cwd();

async function main() {
  const { name } = await prompts({
    type: "text",
    name: "name",
    message: "What is your name?",
  });
  console.log(`Hello ${name}`);
}
main()
console.log("args", args, cwd);
