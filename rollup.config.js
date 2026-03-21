export default {
  input: 'src/index.js', // your main file
  output: {
    file: 'dist/valcade.min.js',
    format: 'umd',
    name: 'Cascade' // window.Cascade in the browser
  }
}