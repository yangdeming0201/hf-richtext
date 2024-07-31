import { ExtensionOptions } from '../../types';
import { ItalicOptions } from '@tiptap/extension-italic';

declare const Italic: import('../../tiptap/vue-3').Mark<ExtensionOptions & ItalicOptions, any>;
export default Italic;
