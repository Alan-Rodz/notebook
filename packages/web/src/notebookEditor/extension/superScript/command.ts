import { EditorState, Transaction } from 'prosemirror-state';

import { AbstractDocumentUpdate, Command, MarkName } from '@ureeka-notebook/web-service';

import { ToggleOrSetMarkDocumentUpdate } from '../markHolder/command';

// ********************************************************************************
/** toggle the Superscript Mark */
export const toggleSuperScriptCommand: Command = (state, dispatch) => {
  const updatedTr = new ToggleSuperScriptDocumentUpdate().update(state, state.tr);
  dispatch(updatedTr);
  return true/*command executed*/;
};
export class ToggleSuperScriptDocumentUpdate implements AbstractDocumentUpdate {
  public constructor() {/*nothing additional*/}

  /**
   * modify the given Transaction such that the Superscript Mark
   * is toggled and return it
   */
  public update(editorState: EditorState, tr: Transaction) {
    const updatedTr = new ToggleOrSetMarkDocumentUpdate(MarkName.SUPER_SCRIPT, editorState.schema.marks[MarkName.SUPER_SCRIPT]).update(editorState, tr);
    return updatedTr;
  }
}
