import { ExtensionOptions } from '../../types';
import { SubscriptExtensionOptions } from '@tiptap/extension-subscript';

declare const Subscript: import('../../tiptap/vue-3').Mark<ExtensionOptions & SubscriptExtensionOptions, any>;
export default Subscript;
