import { markPasteRule, Mark } from '@tiptap/core';
import { find, registerCustomProtocol } from 'linkifyjs';

import { getMarkOutputSpec, AttributeType, LinkMarkSpec, SetAttributeType, DEFAULT_LINK_HREF, DEFAULT_LINK_TAG, DEFAULT_LINK_TARGET, LINK_PROTOCOLS } from '@ureeka-notebook/web-service';

import { setAttributeParsingBehavior } from 'notebookEditor/extension/util/attribute';
import { ExtensionPriority, NoOptions } from 'notebookEditor/model/type';
import { DialogStorage } from 'notebookEditor/model/DialogStorage';

import { linkClick } from './plugin/linkClick';
import { linkCreate } from './plugin/linkCreate';
import { linkPaste } from './plugin/linkPaste';

// ********************************************************************************
// REF: https://github.com/ueberdosis/tiptap/blob/main/packages/extension-link/src/link.ts

// == Mark ========================================================================
export const Link = Mark.create<NoOptions, DialogStorage>({
  ...LinkMarkSpec,
  priority: ExtensionPriority.LINK,

  // -- Attribute -----------------------------------------------------------------
  addAttributes() {
    return {
      [AttributeType.Href]: setAttributeParsingBehavior(AttributeType.Href, SetAttributeType.STRING, DEFAULT_LINK_HREF),
      [AttributeType.Target]: setAttributeParsingBehavior(AttributeType.Target, SetAttributeType.STRING, DEFAULT_LINK_TARGET),

      [AttributeType.TextColor]: setAttributeParsingBehavior(AttributeType.TextColor, SetAttributeType.STRING),
    };
  },

  // -- Storage -------------------------------------------------------------------
  addStorage() { return new DialogStorage(); },

  // -- Plugin --------------------------------------------------------------------
  addProseMirrorPlugins() { return [linkClick(), linkCreate(undefined/*no validation at the moment*/), linkPaste(this.editor)]; },

  // -- Create --------------------------------------------------------------------
  onCreate() { LINK_PROTOCOLS.forEach(registerCustomProtocol); },

  // -- Paste ---------------------------------------------------------------------
  addPasteRules() {
    return [
      markPasteRule({
        find: (text) => find(text)
          .filter(link => link.isLink)
          .map(link => ({
            text: link.value,
            index: link.start,
            data: link,
          })),
        type: this.type,
        getAttributes: (match) => ({ href: match.data?.href }),
      }),
    ];
  },

  // -- View ----------------------------------------------------------------------
  parseHTML() { return [ { tag: DEFAULT_LINK_TAG } ]; },
  renderHTML({ HTMLAttributes, mark }) { return getMarkOutputSpec(mark, HTMLAttributes); },
});
