import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
export abstract class CRUD<T> {
    public abstract models$: BehaviorSubject<T[]>;

    public get currentModels(): T[] {
        return this.models$.value;
    }


    constructor(private apiUrl: string, private http: HttpClient, private typeClass) {
        this.pull();
    }

    pull() {
        this.index().subscribe();
    }

    index(): Observable<T[]> {
        return this.http.get<T[]>(`${this.apiUrl}`).pipe(
            map((res: any[]) => {
                const newModels: T[] = [];
                res.forEach((val: T) => {
                    newModels.push(new this.typeClass(val));
                });
                return newModels;
            }),
            tap((models: T[]) => {
                this.models$.next(models);
            })
        );
    }

    get(id: number): Observable<T> {
        return this.http
            .get<T>(`${this.apiUrl}/${id}`)
            .pipe(map((res) => new this.typeClass(res)));
    }

    create(data): Observable<T> {
        return this.http
            .post<T>(`${this.apiUrl}`, data)
            .pipe(map((res) => new this.typeClass(res)));
    }

    update(id: number, data: any): Observable<T> {
        return this.http.put<T>(`${this.apiUrl}/${id}`, data).pipe(
            map((res) => new this.typeClass(res)),
        );
    }

    delete(id): Observable<boolean> {
        return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
    }

    find(id: number): Promise<T> {
        let promise = new Promise<T>((resolve, reject) => {
            const existingModel = this.getModel(id);
            console.log('existsing', existingModel);
            if (!existingModel) {
                this.get(id).pipe(catchError(err => {
                    reject(); return throwError(err)
                })).subscribe((res: T) => {
                    if (res) {
                        resolve(res)
                    } else {
                        reject();
                    }
                })
            } else {
                resolve(existingModel);
            }
        })
        return promise;
    }
    getModel(id: number): T | null {
        if (this.currentModels.length == 0) {
            return null;
        }
        let filtered = null;
        const models: T[] = this.currentModels;
        models.forEach((model: any) => {
            if (model.id === +id) {
                filtered = model;
            }
        });
        return filtered;
    }

    pushModel(user: T, i?: number) {
        const models = this.currentModels;
        if (i) {
            models[i] = user;
        } else {
            models.push(user);
        }
        this.models$.next(models);
    }

    deleteModel(i: number) {
        const models = this.currentModels;
        models.splice(i, 1);
        this.models$.next(models);
    }
}