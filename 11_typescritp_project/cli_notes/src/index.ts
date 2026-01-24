#!/usr/bin/env node
import { Command } from "commander";
import { addNotes } from "./services/files.services.js";

const cliNotes = new Command();

cliNotes.name("Notes").description("CLI Notes Application").version("1.0.0");

// cliNotes.command("add").description("Add a new todo").argument("<content>", "Note content").action(addNotes);

cliNotes.parse();
console.log(os.userInfo().username);
