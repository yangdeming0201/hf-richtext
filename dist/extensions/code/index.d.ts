import { ExtensionOptions } from '../../types';
import { CodeOptions } from '@tiptap/extension-code';

declare const Code: import('../../tiptap/vue-3').Mark<ExtensionOptions & CodeOptions, any>;
export default Code;
