import { ExtensionOptions } from '../../types';
import { OrderedListOptions } from '@tiptap/extension-ordered-list';

declare const OrderedList: import('../../tiptap/vue-3').Node<ExtensionOptions & OrderedListOptions, any>;
export default OrderedList;
