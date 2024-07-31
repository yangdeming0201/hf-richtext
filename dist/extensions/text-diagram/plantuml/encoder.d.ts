/**
 * Compresses the given string to a PlantUML URL
 * use pako instead of plantuml original javascript
 * @see https://plantuml.com/zh/code-javascript-synchronous
 * @param s plantumlText
 * @returns image url
 */
export declare function compress(s: string): string;
