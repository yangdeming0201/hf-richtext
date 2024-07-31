import { ExtensionOptions } from '../../types';
import { ImageOptions } from '@tiptap/extension-image';

declare const Image: import('../../tiptap/vue-3').Node<ExtensionOptions & ImageOptions, any>;
export default Image;
