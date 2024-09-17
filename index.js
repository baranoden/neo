#!/usr/bin/env node
const inquirer = require("inquirer");
const fs = require("fs-extra");
const path = require("path");

const templatesDir = path.join(__dirname, "templates");

async function init() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "projectType",
      message: "Select Project:",
      choices: ["React-native - Expo - Typescript - Zustand", "Express"],
    },
    {
      type: "input",
      name: "projectName",
      message: "Name of the Project:",
      default: "my-app",
    },
  ]);

  const projectTemplate = path.join(
    templatesDir,
    answers.projectType.toLowerCase()
  );
  const destination = path.join(process.cwd(), answers.projectName);

  try {
    await fs.copy(projectTemplate, destination);
    console.log(`Here you go: ${answers.projectName}`);
  } catch (err) {
    console.error("Having some problems:", err);
  }
}

init();
