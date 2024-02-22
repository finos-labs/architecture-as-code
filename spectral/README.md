# Spectral validation rules for AasC implementations
These rules perform simple structural checks on Architecture-as-Code implementation files to verify that they make sense semantically.
For example, if a relationship references a node, then that node should exist in the file.

## Installing spectral
**Prerequisites**: You need `npm` on your machine. 
Tested on Node v20.11.1.

```bash
npm install -g @stoplight/spectral-cli
```

This will install the `spectral` command globally. 
Note that you may need to add `sudo` if you're on a machine that lets you do this. 

If you can't run things as root, remove `-g`; you'll then need to use `npx spectral` to reference the executable in `node_modules`.

## Running checks
Run checks against a file with the following command:

```bash
spectral lint --ruleset aac.yaml implementation.json
```

For example, to run the rulesets against the sample spec, which should produce several errors:

```bash
spectral lint --ruleset aac.yaml examples/bad-rest-api.json
```