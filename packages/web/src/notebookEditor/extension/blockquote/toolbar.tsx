import { RiDoubleQuotesL } from 'react-icons/ri';

import { NodeName } from '@ureeka-notebook/web-service';

import { markBold } from 'notebookEditor/extension/bold/toolbar';
import { markCode } from 'notebookEditor/extension/code/toolbar';
import { markItalic } from 'notebookEditor/extension/italic/toolbar';
import { linkToolItem } from 'notebookEditor/extension/link/toolbar';
import { markStrikethrough } from 'notebookEditor/extension/strikethrough/toolbar';
import { markSuperScript } from 'notebookEditor/extension/superScript/toolbar';
import { markSubScript } from 'notebookEditor/extension/subScript/toolbar';
import { fontSizeToolItem, textColorToolItem } from 'notebookEditor/extension/textStyle/toolbar';
import { markUnderline } from 'notebookEditor/extension/underline/toolbar';
import { toggleBlock } from 'notebookEditor/extension/util/node';
import { Toolbar, ToolItem } from 'notebookEditor/sidebar/toolbar/type';

// ********************************************************************************
// == Tool Items ==================================================================
export const blockquoteToolItem: ToolItem = {
  toolType: 'button',
  name: NodeName.BLOCKQUOTE,
  label: NodeName.BLOCKQUOTE,

  icon: <RiDoubleQuotesL size={16} />,
  tooltip: 'Blockquote (⌘ + ⇧ + B)',

  shouldBeDisabled: () => false/*do not disable*/,
  shouldShow: (editor, depth) => depth === undefined || editor.state.selection.$anchor.depth === depth/*direct parent*/,
  isActive: (editor) => editor.isActive(NodeName.BLOCKQUOTE),
  onClick: (editor) => toggleBlock(editor, NodeName.BLOCKQUOTE, {/*no attrs*/}),
};

// == Toolbar =====================================================================
export const BlockquoteToolbar: Toolbar = {
  title: 'Blockquote',
  name: NodeName.BLOCKQUOTE/*Expected and guaranteed to be unique*/,

  toolsCollections: [
    [
      blockquoteToolItem,
      markBold,
      markItalic,
      markUnderline,
      markStrikethrough,
      markSuperScript,
      markSubScript,
      markCode,
      linkToolItem,
    ],
    [
      fontSizeToolItem,
      textColorToolItem,
    ],
  ],
};
