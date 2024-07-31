import { ExtensionOptions } from '../../types';
import { TaskListOptions } from '@tiptap/extension-task-list';

declare const TaskList: import('../../tiptap/vue-3').Node<ExtensionOptions & TaskListOptions, any>;
export default TaskList;
