import { c as createComponent, m as maybeRenderHead, b as renderTemplate, a as createAstro, i as defineScriptVars, r as renderComponent } from './astro/server_B_mU_BV-.mjs';
import 'kleur/colors';
import 'clsx';

const $$AmazonLogo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,24.000000) scale(0.02500000,-0.02500000)" fill="#000000" stroke="none"> <path d="M380 860 c-18 -18 -20 -33 -20 -160 l0 -140 -87 0 -88 0 148 -147
147 -148 147 148 148 147 -88 0 -87 0 0 140 c0 177 -2 180 -120 180 -67 0 -83
-3 -100 -20z m140 -220 l0 -160 32 0 33 0 -53 -52 -52 -53 -52 53 -53 52 33 0
32 0 0 160 0 160 40 0 40 0 0 -160z"></path> <path d="M80 120 l0 -40 400 0 400 0 0 40 0 40 -400 0 -400 0 0 -40z"></path> </g> </svg>`;
}, "/home/user/Astro.v5-Books/src/components/AmazonLogo.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$BuyButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BuyButton;
  const SPAIN = "ES";
  const { buy } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<a id="buy-button" href="#" title="Comprar libro" target="_blank" rel="noopener noreferrer" class="text-balance inline-flex gap-2 items-center bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg border border-yellow-500 transition ease-in-out hover:scale-105 justify-center text-center">\nCargando...\n', " </a> <script>(function(){", "\n// La detecci\xF3n de pa\xEDs se hace del lado del cliente\nasync function getCountry() {\n  try {\n    // Puedes usar un servicio de geolocalizaci\xF3n o una API\n    // O para pruebas simplemente:\n    return 'ES'; \n  } catch (e) {\n    return 'ES'; // Valor por defecto\n  }\n}\n\ngetCountry().then(country => {\n  const storeCountry = country === SPAIN ? 'spain' : 'usa';\n  const countryName = country === SPAIN ? 'Espa\xF1ol' : 'Ingl\xE9s';\n  const url = buy && buy[storeCountry] ? buy[storeCountry] : '#';\n  \n  const button = document.getElementById('buy-button');\n  if (button) {\n    button.href = url;\n    button.textContent = `Descargar en ${countryName}`;\n    const amazonLogo = button.querySelector('svg') || document.createElement('div');\n    button.appendChild(amazonLogo);\n  }\n});\n})();<\/script>"], ["", '<a id="buy-button" href="#" title="Comprar libro" target="_blank" rel="noopener noreferrer" class="text-balance inline-flex gap-2 items-center bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg border border-yellow-500 transition ease-in-out hover:scale-105 justify-center text-center">\nCargando...\n', " </a> <script>(function(){", "\n// La detecci\xF3n de pa\xEDs se hace del lado del cliente\nasync function getCountry() {\n  try {\n    // Puedes usar un servicio de geolocalizaci\xF3n o una API\n    // O para pruebas simplemente:\n    return 'ES'; \n  } catch (e) {\n    return 'ES'; // Valor por defecto\n  }\n}\n\ngetCountry().then(country => {\n  const storeCountry = country === SPAIN ? 'spain' : 'usa';\n  const countryName = country === SPAIN ? 'Espa\xF1ol' : 'Ingl\xE9s';\n  const url = buy && buy[storeCountry] ? buy[storeCountry] : '#';\n  \n  const button = document.getElementById('buy-button');\n  if (button) {\n    button.href = url;\n    button.textContent = \\`Descargar en \\${countryName}\\`;\n    const amazonLogo = button.querySelector('svg') || document.createElement('div');\n    button.appendChild(amazonLogo);\n  }\n});\n})();<\/script>"])), maybeRenderHead(), renderComponent($$result, "AmazonLogo", $$AmazonLogo, {}), defineScriptVars({ buy, SPAIN }));
}, "/home/user/Astro.v5-Books/src/components/BuyButton.astro", void 0);

const $$file = "/home/user/Astro.v5-Books/src/components/BuyButton.astro";
const $$url = undefined;

export { $$BuyButton as default, $$file as file, prerender, $$url as url };
