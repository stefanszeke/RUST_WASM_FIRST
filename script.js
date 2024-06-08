import init, { greet, fibonacci } from "./pkg/hello_wasm.js";

await init();

const fibonacci_input = document.getElementById("fibonacci_input");
const fibonacci_result = document.getElementById("fibonacci_result");
const fibonacci_btn = document.getElementById("fibonacci_btn");
const fibonacci_js_btn = document.getElementById("fibonacci_js_btn");

fibonacci_btn.addEventListener("click", () => {
    get_fibonacci(fibonacci);
});

fibonacci_js_btn.addEventListener("click", () => {
    get_fibonacci(fibonacci_js);
});

function fibonacci_js(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci_js(n - 1) + fibonacci_js(n - 2);
}

function get_fibonacci(function_name) {
  const n = parseInt(fibonacci_input.value);

  fibonacci_result.textContent = "calculating...";

  setTimeout(() => {
    const start = performance.now();
    const result = function_name(n);
    const end = performance.now();

    const runtime = end - start;

    fibonacci_result.textContent = `result: ${result} for JS in ${runtime.toFixed(2)}ms`;
  }, 0);
}
