import { MdFormatIndentDecrease, MdFormatIndentIncrease } from 'react-icons/md';

import { isNodeSelection } from '@ureeka-notebook/web-service';

import { toolItemCommandWrapper } from 'notebookEditor/command/util';
import { ToolItem } from 'notebookEditor/sidebar/toolbar/type';

import { changeBlockIndentationCommand } from './command';

// ********************************************************************************
// -- Indentation -----------------------------------------------------------------
export const dedentBlocksToolItem: ToolItem = {
  toolType: 'button',

  name: 'dedentBlocksToolItem',
  label: 'dedentBlocksToolItem',

  icon: <MdFormatIndentDecrease size={16} />,
  tooltip: 'Decrease Indent (⌘ + [)',

  shouldBeDisabled: (editor) => isNodeSelection(editor.state.selection),
  onClick: (editor, depth) => toolItemCommandWrapper(editor, depth, changeBlockIndentationCommand('dedent')),
};

export const indentBlocksToolItem: ToolItem = {
  toolType: 'button',

  name: 'indentBlocksToolItem',
  label: 'indentBlocksToolItem',

  icon: <MdFormatIndentIncrease size={16} />,
  tooltip: 'Increase Indent (⌘ + ])',

  shouldBeDisabled: (editor) => isNodeSelection(editor.state.selection),
  onClick: (editor, depth) => toolItemCommandWrapper(editor, depth, changeBlockIndentationCommand('indent')),
};

