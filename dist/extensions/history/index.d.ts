import { ExtensionOptions } from '../../types';
import { HistoryOptions } from '@tiptap/extension-history';

declare const History: import('../../tiptap/vue-3').Extension<ExtensionOptions & HistoryOptions, any>;
export default History;
