import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_zaSPFA_D.mjs';
import { manifest } from './manifest_CAOKcBJ0.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_DFkeMpnY.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_DQ4820EI.mjs')],
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
    "middlewareSecret": "5ad7ab02-7b2d-40a6-9a15-5663a45322ea",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
