import { CommandMenuItem } from '../../types';
import { PropType } from 'vue';

declare function onKeyDown({ event }: {
    event: KeyboardEvent;
}): boolean;
declare const _default: import('vue').DefineComponent<{
    items: {
        type: PropType<CommandMenuItem[]>;
        required: true;
    };
    command: {
        type: PropType<(item: CommandMenuItem) => void>;
        required: true;
    };
}, {
    onKeyDown: typeof onKeyDown;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    items: {
        type: PropType<CommandMenuItem[]>;
        required: true;
    };
    command: {
        type: PropType<(item: CommandMenuItem) => void>;
        required: true;
    };
}>>, {}, {}>;
export default _default;
