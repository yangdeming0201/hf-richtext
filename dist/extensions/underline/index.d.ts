import { ExtensionOptions } from '../../types';
import { UnderlineOptions } from '@tiptap/extension-underline';

declare const Underline: import('../../tiptap/vue-3').Mark<ExtensionOptions & UnderlineOptions, any>;
export default Underline;
