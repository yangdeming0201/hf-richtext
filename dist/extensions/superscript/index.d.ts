import { ExtensionOptions } from '../../types';
import { SuperscriptExtensionOptions } from '@tiptap/extension-superscript';

declare const Superscript: import('../../tiptap/vue-3').Mark<ExtensionOptions & SuperscriptExtensionOptions, any>;
export default Superscript;
