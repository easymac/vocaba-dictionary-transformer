# Wiktionary Dump Transformer for Vocaba

A simple script for importing data from the English Wiktionary dumps provided by kaikki.org. The Wiktionary dumps are provided as large (~2.2GB) `jsonl` files.

The data is transformed for the purposes of the [Vocaba app](https://github.com/easymac/vocaba).

The output is a SQLite database (for use with Expo's sqlite3). Its structure isn't set in stone, but for now it's a table with top-level word properties as columns (word, lexical category, ipa pronunciation) and its definitions as a serialized JSON string.

The idea here being that we really don't need to do anything with definitions except display them, so why bother with extra tables and joins? (We will regret this decision one day.)

## Getting started


### Getting your data

In the [kaikki.org](https://kaikki.org) directory, select the [English dictionary](https://kaikki.org/dictionary/English/) and download the "JSONL data for all word senses in the English dictionary".

### Running the script

```bash
node index.mjs [input file] [output file]
```

### And then what?

I'm not sure yet. We'll see!