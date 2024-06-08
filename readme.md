## setup: Cargo.toml
```toml
[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2.92"
```

## build
```
wasm-pack build --target web
```

## use
import "./pkg/hello_wasm.js"; to your html file

serve the html file with a server
