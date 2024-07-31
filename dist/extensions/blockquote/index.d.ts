import { ExtensionOptions } from '../../types';
import { BlockquoteOptions } from '@tiptap/extension-blockquote';

declare const Blockquote: import('../../tiptap/vue-3').Node<ExtensionOptions & BlockquoteOptions, any>;
export default Blockquote;
