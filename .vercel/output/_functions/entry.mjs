import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DjiicxdU.mjs';
import { manifest } from './manifest_Cbf8rVxg.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_CfGdGfOu.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_BpNmS3SP.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/libro/_id_.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.4.1_jiti@2.4.2_lightningcss@1.29.1_rollup@4.34.9_typescript@5.8.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/libro/[id].astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "716882dc-1c60-4b98-a142-70caa9d8e80b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
