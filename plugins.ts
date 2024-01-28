import { $ } from "bun";

function copyDeclarationFiles(): import("bun").BunPlugin {
  return {
    name: "copy-declaration-files",
    async setup(build) {
      const outDir = build.config.outdir || "out";

      await $`copyfiles -u 1 \"src/**/*.d.ts\" ${outDir}`;
    },
  };
}

export { copyDeclarationFiles };
