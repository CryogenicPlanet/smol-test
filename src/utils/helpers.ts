```typescript
// src/utils/helpers.ts

export function parseGithubData(data: any): GithubData {
  // Implement the logic to parse the data from the Github GraphQL API
  // and return it in the format of the GithubData schema.
}

export function injectStyles(styles: string): void {
  const styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
}

export function removeUnwantedElements(): void {
  // Implement the logic to remove unwanted elements from the Github home page.
}
```