import { ExtensionOptions } from '../../types';
import { StrikeOptions } from '@tiptap/extension-strike';

declare const Strike: import('../../tiptap/vue-3').Mark<ExtensionOptions & StrikeOptions, any>;
export default Strike;
