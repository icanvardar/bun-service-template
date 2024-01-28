import { copyDeclarationFiles } from "./plugins";

const result = await Bun.build({
    entrypoints: ["./index.ts"],
    outdir: "./out",
    plugins: [copyDeclarationFiles()],
    target: "bun",
    splitting: true,
    naming: "files/[dir]/[name]-[hash].[ext]",
    root: ".",
    sourcemap: "external"
});

if (!result.success) {
    console.error("Build failed");
    for (const message of result.logs) {
        console.error(message);
    }
} else {
    console.log(result.outputs[0]);
}
