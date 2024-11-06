document.addEventListener('DOMContentLoaded', (event) => {
  const editor = document.getElementById('editor');
  const preview = document.getElementById('preview');

  // Default markdown text containing all required elements
  const defaultMarkdown = `# Welcome to my Markdown Previewer!

## Here is a sub-heading

[Learn more about Markdown](https://www.markdownguide.org/)

Inline code: \`const x = 1;\`

\`\`\`javascript
function helloWorld() {
  console.log("Hello, World!");
}
\`\`\`

- List item 1
- List item 2
- List item 3

> Blockquote example.

![Image](https://via.placeholder.com/150 "Placeholder Image")

**Bold text example.**

This text contains a line break below.

And this is another line.
`;

  // Set default markdown in the editor
  editor.value = defaultMarkdown;

  // Render markdown to HTML with line breaks
  function renderMarkdown() {
      const markdownText = editor.value;
      preview.innerHTML = marked(markdownText, { breaks: true });
  }

  // Event listener for real-time updating
  editor.addEventListener('input', renderMarkdown);

  // Initial rendering of default markdown
  renderMarkdown();
});
