import { AngularFireStorage } from "@angular/fire/storage/storage";
import { from, Observable } from "rxjs";
import {  map, switchMap } from "rxjs/operators";
import { BlogStoreService } from "src/app/modules/customer/blog/store/blog-store.service";

export class UploadAdapter {
    fb: any;
    downloadURL: Observable<string> | undefined;
    constructor(
        private loader: any,
        private storage: AngularFireStorage,
        private blogStore: BlogStoreService
    ) {
    }

    upload() {
        let upload = new Promise((resolve, reject) => {
            this.loader['file'].then(
                (data: any) => {
                    const filePath = `RoomsImages/${Date.now()}`;
                    let file: any;
                    from(this.storage.upload(filePath, data)).pipe(
                        switchMap((result: any) => {
                            file = result;
                            return this.storage.ref(filePath).getDownloadURL()
                        }),
                        map((urlImage: string) => {
                            this.blogStore.changeCurrentImage(urlImage);
                            return { default: file['attachment'] }
                        })
                    )
                        .subscribe(
                            (res: any) => resolve(res),
                            (error: any) => reject(data.msg)
                        );
                }
            );
        });
        return upload;
    }
    abort() {
        console.log("abort")
    }
}