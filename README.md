# Wiktionary Dump Transformer for Vocaba

A simple script for importing data from the English Wiktionary dumps provided by kaikki.org. The Wiktionary dumps are provided as large (~2.2GB) `jsonl` files.

The data is transformed for the purposes of the [Vocaba app](https://github.com/easymac/vocaba).

The output, tentatively, is itself a large `json` file but in the future might be a sqlite database instead depending on what ends up being easier for compression and distribution within a multiplatform Expo app.

## Getting started


### Getting your data

In the [kaikki.org](https://kaikki.org) directory, select the [English dictionary](https://kaikki.org/dictionary/English/) and download the "JSONL data for all word senses in the English dictionary".

### Running the script

```bash
node index.mjs [input file] [output file]
```

### And then what?

I'm not sure yet. We'll see!