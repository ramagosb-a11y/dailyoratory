import { existsSync } from "node:fs";
import { registerHooks } from "node:module";
import { extname } from "node:path";
import { fileURLToPath } from "node:url";

const sourceRoot = new URL("../src/", import.meta.url).href;

// Native Node tests need an extension where the application bundler does not.
// Keep the fallback confined to relative TypeScript imports inside project src/.
registerHooks({
  resolve(specifier, context, nextResolve) {
    try {
      return nextResolve(specifier, context);
    } catch (error) {
      if (error.code === "ERR_MODULE_NOT_FOUND" && specifier.startsWith(".") &&
          !extname(specifier) && context.parentURL?.startsWith(sourceRoot)) {
        const candidate = new URL(`${specifier}.ts`, context.parentURL);
        if (candidate.href.startsWith(sourceRoot) && existsSync(fileURLToPath(candidate))) {
          return nextResolve(candidate.href, context);
        }
      }
      throw error;
    }
  },
});
