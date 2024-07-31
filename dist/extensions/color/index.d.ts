import { ExtensionOptions } from '../../types';
import { ColorOptions } from '@tiptap/extension-color';

declare const Color: import('../../tiptap/vue-3').Extension<ColorOptions & ExtensionOptions, any>;
export default Color;
