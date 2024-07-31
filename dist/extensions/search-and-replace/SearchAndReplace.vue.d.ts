import { Editor, PluginKey } from '../../tiptap';
import { PropType } from 'vue';
import { SearchAndReplacePluginState } from './SearchAndReplacePlugin';

declare const _default: import('vue').DefineComponent<{
    editor: {
        type: PropType<Editor>;
        required: true;
    };
    pluginKey: {
        type: PropType<PluginKey<SearchAndReplacePluginState>>;
        required: true;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    editor: {
        type: PropType<Editor>;
        required: true;
    };
    pluginKey: {
        type: PropType<PluginKey<SearchAndReplacePluginState>>;
        required: true;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    visible: boolean;
}, {}>;
export default _default;
