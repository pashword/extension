import { createHotContext, updateStyle, removeStyle } from '../node_modules/vite/dist/client/client.mjs.js';

import.meta.hot = createHotContext("/src/content.css.js");const __vite__id = "/Users/macbook-air/Public/pashword-extension/src/content.css";
const __vite__css = ".crx img {\n  width: 3rem;\n  height: 3rem;\n}\n";
updateStyle(__vite__id, __vite__css);
import.meta.hot.accept();
import.meta.hot.prune(() => removeStyle(__vite__id));

export { __vite__css as default };
