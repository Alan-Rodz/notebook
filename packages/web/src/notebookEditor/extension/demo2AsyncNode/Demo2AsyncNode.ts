import { Node } from '@tiptap/core';

import { getNodeOutputSpec, isDemo2AsyncNode, AttributeType, Demo2AsyncNodeSpec, NodeName, SetAttributeType, DEFAULT_DEMO_2_ASYNC_NODE_ID, DEFAULT_DEMO_2_ASYNC_NODE_DELAY, DEFAULT_DEMO_2_ASYNC_NODE_STATUS } from '@ureeka-notebook/web-service';

import { setAttributeParsingBehavior } from 'notebookEditor/extension/util/attribute';
import { NodeViewStorage } from 'notebookEditor/model/NodeViewStorage';
import { NoOptions } from 'notebookEditor/model/type';

import { handleBlockBackspace, handleBlockArrowUp, handleBlockArrowDown } from '../util/node';
import { toggleDemo2AsyncNodeCommand } from './command';
import { Demo2AsyncNodeController, Demo2AsyncNodeStorageType } from './nodeView/controller';

// ********************************************************************************
// == Node ========================================================================
export const Demo2AsyncNode = Node.create<NoOptions, Demo2AsyncNodeStorageType>({
  ...Demo2AsyncNodeSpec,

  // -- Attribute -----------------------------------------------------------------
  addAttributes() {
    return {
      [AttributeType.Id]: setAttributeParsingBehavior(AttributeType.Id, SetAttributeType.STRING, DEFAULT_DEMO_2_ASYNC_NODE_ID),
      [AttributeType.Delay]: setAttributeParsingBehavior(AttributeType.Delay, SetAttributeType.NUMBER, DEFAULT_DEMO_2_ASYNC_NODE_DELAY),
      [AttributeType.Status]: setAttributeParsingBehavior(AttributeType.Status, SetAttributeType.STRING, DEFAULT_DEMO_2_ASYNC_NODE_STATUS),

      [AttributeType.TextToReplace]: setAttributeParsingBehavior(AttributeType.TextToReplace, SetAttributeType.STRING),

      [AttributeType.FontSize]: setAttributeParsingBehavior(AttributeType.FontSize, SetAttributeType.STRING),
      [AttributeType.TextColor]: setAttributeParsingBehavior(AttributeType.TextColor, SetAttributeType.STRING),

      [AttributeType.PaddingTop]: setAttributeParsingBehavior(AttributeType.PaddingTop, SetAttributeType.STRING),
      [AttributeType.PaddingBottom]: setAttributeParsingBehavior(AttributeType.PaddingBottom, SetAttributeType.STRING),
      [AttributeType.PaddingLeft]: setAttributeParsingBehavior(AttributeType.PaddingLeft, SetAttributeType.STRING),
      [AttributeType.PaddingRight]: setAttributeParsingBehavior(AttributeType.PaddingRight, SetAttributeType.STRING),

      [AttributeType.MarginTop]: setAttributeParsingBehavior(AttributeType.MarginTop, SetAttributeType.STRING),
      [AttributeType.MarginLeft]: setAttributeParsingBehavior(AttributeType.MarginLeft, SetAttributeType.STRING),
      [AttributeType.MarginBottom]: setAttributeParsingBehavior(AttributeType.MarginBottom, SetAttributeType.STRING),
      [AttributeType.MarginRight]: setAttributeParsingBehavior(AttributeType.MarginRight, SetAttributeType.STRING),
    };
  },

  // -- Command -------------------------------------------------------------------
  addCommands() { return { toggleDemo2AsyncNode: toggleDemo2AsyncNodeCommand }; },
  addKeyboardShortcuts() {
    return {
      // toggle a demo2 async node
      'Shift-Alt-Mod-d': () => this.editor.commands.toggleDemo2AsyncNode(),
      'Shift-Alt-Mod-D': () => this.editor.commands.toggleDemo2AsyncNode(),

      // remove code block when at start of document or code block is empty
      'Backspace': ({ editor }) => handleBlockBackspace(editor, NodeName.DEMO_2_ASYNC_NODE),

      // set gap cursor if necessary
      'ArrowUp': ({ editor }) => handleBlockArrowUp(editor, NodeName.DEMO_2_ASYNC_NODE),
      'ArrowDown': ({ editor }) => handleBlockArrowDown(editor, NodeName.DEMO_2_ASYNC_NODE),

      // (SEE: NOTE in Demo2AsyncNodeSpec for code property)
      // exit node on shift enter, inserting a paragraph below
      'Shift-Enter': ({ editor }) => editor.commands.exitCode(),
    };
  },

  // -- Storage -------------------------------------------------------------------
  addStorage() { return new NodeViewStorage<Demo2AsyncNodeController>(); },

  // -- View ----------------------------------------------------------------------
  addNodeView() {
    return ({ editor, node, getPos }) => {
      if(!isDemo2AsyncNode(node)){ console.error(`Unexpected node type (${node.type.name}) while adding Demo2AsyncNode NodeView`); return {/*empty*/};/*nothing to do*/}
      return new Demo2AsyncNodeController(editor, node, this.storage, getPos);
    };
  },
  parseHTML() { return [{ tag: NodeName.DEMO_2_ASYNC_NODE, preserveWhitespace: 'full'/*preserve new lines when parsing the content of the demo2AsyncNode*/ }]; },
  renderHTML({ node, HTMLAttributes }) { return getNodeOutputSpec(node, HTMLAttributes, false/*is not a leaf node*/); },
});
