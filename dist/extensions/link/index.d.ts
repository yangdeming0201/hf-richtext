import { ExtensionOptions } from '../../types';
import { LinkOptions } from '@tiptap/extension-link';

declare const Link: import('../../tiptap/vue-3').Mark<ExtensionOptions & LinkOptions, any>;
export default Link;
