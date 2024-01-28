await Bun.build({
  entrypoints: ["./index.ts"],
  outdir: "./out",
  minify: true,
  plugins: []
});
