#!/usr/bin/env node
import { Command } from "commander";
import { registerAddCommand, registerGetCommand } from "./utils/command.js";

const program = new Command();

program.name("Notes").description("Notes Application").version("1.0.0");

registerAddCommand(program);
registerGetCommand(program);

program.parse();
