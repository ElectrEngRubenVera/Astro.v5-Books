import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Btor2pOK.mjs';
import { manifest } from './manifest_BbAkAs1t.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_DnDRpZNq.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_DWsP1TnG.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/libro/_id_.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
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
    "middlewareSecret": "2338619f-b888-4ab7-937c-168c88998d06",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
