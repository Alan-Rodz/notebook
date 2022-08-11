import { EditorState } from 'prosemirror-state';

import { DocumentUpdate } from './type';

// ********************************************************************************
/** Inserts the specified text in the specified (optional) range
 *  @see Transaction#insertText() */
export class InsertText implements DocumentUpdate {
  public constructor(private readonly text: string, private readonly from?: number, private readonly to?: number) {/*nothing additional*/}
  public update({ tr }: EditorState) {
    tr.insertText(this.text, this.from, this.to);
  }
}
