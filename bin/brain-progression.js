#!/usr/bin/env node
import { askName } from '../src/cli.js';
import { runGame } from '../src/index.js';
import progressionGame from '../src/games/progression.js';

const name = askName();
runGame(progressionGame, name);
