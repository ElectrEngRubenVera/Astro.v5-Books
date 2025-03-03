import { c as createComponent, m as maybeRenderHead, b as renderTemplate } from './astro/server_B_mU_BV-.mjs';
import 'kleur/colors';
import 'clsx';
import { s as setOnSetGetEnv } from './runtime_BaX0UJyD.mjs';

// @ts-check

setOnSetGetEnv(() => {
	
});
const SCORE_API_ENDPOINT = "https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new";

const prerender = true;
const $$BookScore = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch(SCORE_API_ENDPOINT);
  const scoreValue = await res.text();
  return renderTemplate`${maybeRenderHead()}<span class="text-xs" id="score">
⭐ Puntuación: ${scoreValue.trim()}/50
</span>`;
}, "/home/user/Astro.v5-Books/src/components/BookScore.astro", void 0);

const $$file = "/home/user/Astro.v5-Books/src/components/BookScore.astro";
const $$url = undefined;

export { $$BookScore as default, $$file as file, prerender, $$url as url };
