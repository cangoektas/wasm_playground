fetch("target/wasm32-unknown-unknown/release/wasm_playground.wasm")
  .then(response => response.arrayBuffer())
  .then(bytes => WebAssembly.instantiate(bytes))
  .then(wasmModule => {
    const { add_i8, add_i16, add_i32 } = wasmModule.instance.exports;

    console.log("add_i8(127, 1):", add_i8(127, 1)); // -128
    console.log("add_i16(32767, 1):", add_i16(32767, 1)); // -32768
    console.log("add_i32(2147483647, 1):", add_i32(2147483647, 1)); // -2147483648
  })
  .catch(error => {
    console.error("Something went wrong:", error);
  });
