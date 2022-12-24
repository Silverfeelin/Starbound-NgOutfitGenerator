import { Subject, Observable } from 'rxjs';
import { saveAs } from 'file-saver';

export class FileHelper {
  static readFileAsDataURL(file: File): Observable<string> {
    const subj = new Subject<string>();

    const reader = new FileReader();
    reader.onload = (e: any) => {
      subj.next(e.target.result);
      subj.complete();
    };
    reader.readAsDataURL(file);

    return subj;
  }

  static saveText(text: string, fileName: string): void {
    const blob = new Blob([text], {type: 'application/json;charset=utf-8'});
    saveAs(blob, fileName);
  }
}
