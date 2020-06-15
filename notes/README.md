# Notes

## Compiler

Runnign `tsc src/index.js` will compile to `src/index.js`.

### Flags

* `--target ES2015`, `--target ES2017`
* `--module commonjs`
* `--watch`

## Configuration for Compiler

You'll have a `tsconfig.json` file with the configuration that will be used whenever you run `tsc`.

```json
{
    "compilerOptions": {
        "moduleResolution": "node",
        "target": "es2017",
        "outDir": "lib",
        "declaration": true,
        "sourceMap": true,
        "strict": true,
        "noImplicitAny": true,
        "strictNullChecks": true,
        "allowJs": true,
        "emitDecoratorMetadata": true
    },
    "include": ["src"]
}
```
