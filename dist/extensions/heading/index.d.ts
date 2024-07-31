import { ExtensionOptions } from '../../types';
import { HeadingOptions } from '@tiptap/extension-heading';

declare const Blockquote: import('../../tiptap').Node<ExtensionOptions & HeadingOptions, any>;
export default Blockquote;
