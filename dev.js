#!/usr/bin/env node

const args = require('arg')({});

require('execa').execaSync('node', ['index.js', 'workspace', '--example', args._[0] || 'basic-lang-javascript'], { stdio: 'inherit' });
