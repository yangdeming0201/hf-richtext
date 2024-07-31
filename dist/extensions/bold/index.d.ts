import { ExtensionOptions } from '../../types';
import { BoldOptions } from '@tiptap/extension-bold';

declare const Bold: import('../../tiptap/vue-3').Mark<ExtensionOptions & BoldOptions, any>;
export default Bold;
