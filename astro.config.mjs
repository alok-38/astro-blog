// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false
    },
    markdown: {
        syntaxHighlight: 'shiki',  // Use Shiki for syntax highlighting
        shikiConfig: {
            theme: 'github-dark'  // Choose a theme for syntax highlighting (e.g., 'github-dark', 'nord', etc.)
        }
    }
});
