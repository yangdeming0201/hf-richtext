import { ExtensionOptions } from '../../types';
import { BulletListOptions } from '@tiptap/extension-bullet-list';

declare const BulletList: import('../../tiptap/vue-3').Node<ExtensionOptions & BulletListOptions, any>;
export default BulletList;
