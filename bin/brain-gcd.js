#!/usr/bin/env node
import { askName } from '../src/cli.js'
import { runGame } from '../src/index.js'
import gcdGame from '../src/games/gcd.js'

const name = askName()
runGame(gcdGame, name)
