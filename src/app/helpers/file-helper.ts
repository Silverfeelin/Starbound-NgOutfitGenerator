import { ReplaySubject, Subject, Observable } from 'rxjs';

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
}
