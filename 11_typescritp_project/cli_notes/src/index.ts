#!/usr/bin/env node
import { Command } from "commander";
import { registerAddCommand } from "./utils/command.js";

const program = new Command();

program.name("Notes").description("Notes Application").version("1.0.0");

registerAddCommand(program);
program.parse();
