import { createHighlighter, createJavaScriptRegexEngine } from 'shiki';

try {
  console.log('creating highlighter...');
  const highlighter = await createHighlighter({
    langs: ['js'],
    themes: ['github-light', 'github-dark'],
    engine: createJavaScriptRegexEngine(),
  });
  const html = highlighter.codeToHtml("console.log('Hello World');", {
    lang: 'js',
    themes: { light: 'github-light', dark: 'github-dark' },
  });
  console.log('OK', html.slice(0, 120));
} catch (e) {
  console.error('FAIL', e);
  process.exit(1);
}