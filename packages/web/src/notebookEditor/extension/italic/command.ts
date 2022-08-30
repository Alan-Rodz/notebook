import { EditorState, Transaction } from 'prosemirror-state';

import { AbstractDocumentUpdate, Command, MarkName, NotebookSchemaType } from '@ureeka-notebook/web-service';

import { ToggleOrSetMarkDocumentUpdate } from '../markHolder/command';

// ********************************************************************************
/** toggle the Italic Mark */
export const toggleItalicCommand: Command = (state, dispatch) => {
  const updatedTr = new ToggleItalicDocumentUpdate().update(state, state.tr);
  if(updatedTr) {
    dispatch(updatedTr);
    return true/*Command executed*/;
  } /* else -- Command cannot be executed */

  return false/*not executed*/;
};
export class ToggleItalicDocumentUpdate implements AbstractDocumentUpdate {
  public constructor() {/*nothing additional*/}

  /**
   * modify the given Transaction such that the Italic Mark
   * is toggled and return it
   */
  public update(editorState: EditorState<NotebookSchemaType>, tr: Transaction<NotebookSchemaType>) {
    const updatedTr = new ToggleOrSetMarkDocumentUpdate(MarkName.ITALIC, editorState.schema.marks[MarkName.ITALIC]).update(editorState, tr);
    return updatedTr/*updated*/;
  }
}
