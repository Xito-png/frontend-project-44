#!/usr/bin/env node
import { askName } from '../src/cli.js';
import { runGame } from '../src/index.js';
import calcGame from '../src/games/calc.js';

const name = askName();
runGame(calcGame, name);
