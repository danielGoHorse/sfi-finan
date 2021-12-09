import { User } from 'src/app/interfaces/user';
import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    private userCollections: AngularFirestoreCollection<User>;

    usuarioToEdit: any;
    formUsuario: any;
    dadosFinanciamentoToEdit: any;

    constructor(private afs: AngularFirestore) {
        this.userCollections = this.afs.collection<User>('Users');

    }


    getClientes() {
        return this.userCollections.snapshotChanges().pipe(
            map(act => {
                return act.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );
    }

    addUsers(usuario: User) {
        return this.userCollections.add(usuario);
    }

    getCliente(id: string) {
        return this.userCollections.doc<Cliente>(id).valueChanges();
    }

    updateCliente(id: string, usuario: User) {
        return this.userCollections.doc<User>(id).update(usuario);
    }

    deleteCliente(id: string) {
        return this.userCollections.doc(id).delete();
    }

    sendForm(form: any) {
        this.formUsuario = form;
    }

    public getForm(): any {
        return this.formUsuario;
    }








    // getProducts() {
    //   return this.userCollections.snapshotChanges().pipe(
    //     return actions.mapmap(actions => {
    //       (a => {
    //         const data = a.payload.doc.data();
    //         const id = a.payload.doc.id;

    //         return { id, ...data };
    //       });
    //     })
    //   );
    // }


}
