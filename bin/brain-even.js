#!/usr/bin/env node
import { askName } from '../src/cli.js'
import { runGame } from '../src/index.js'
import evenGame from '../src/games/even.js'

const name = askName()
runGame(evenGame, name)
