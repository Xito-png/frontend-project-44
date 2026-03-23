#!/usr/bin/env node
import { askName } from '../src/cli.js';
import { runGame } from '../src/index.js';
import primeGame from '../src/games/prime.js';

const name = askName();
runGame(primeGame, name);
