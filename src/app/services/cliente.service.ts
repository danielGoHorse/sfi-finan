import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    private clientesCollections: AngularFirestoreCollection<Cliente>;

    clienteToEdit: any;
    formCliente: any;
    dadosFinanciamentoToEdit: any;

    constructor(private afs: AngularFirestore) {
        this.clientesCollections = this.afs.collection<Cliente>('Clientes');

    }


    getClientes() {
        return this.clientesCollections.snapshotChanges().pipe(
            map(act => {
                return act.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );
    }

    addClientes(cliente: Cliente) {
        return this.clientesCollections.add(cliente);
    }

    getCliente(id: string) {
        return this.clientesCollections.doc<Cliente>(id).valueChanges();
    }

    // updateCliente(id: string, cliente: Cliente) {
    //     return this.clientesCollections.doc<Cliente>(id).update(cliente);
    // }

    deleteCliente(id: string) {
        return this.clientesCollections.doc(id).delete();
    }

    sendForm(form: any) {
        this.formCliente = form;
    }

    public getForm(): any {
        return this.formCliente;
    }

    public getToDadosFinan(): any {
        return this.dadosFinanciamentoToEdit;
    }

    selectCliente(dadosFinanciamento: any) {
        this.dadosFinanciamentoToEdit = dadosFinanciamento;
    }






    // getProducts() {
    //   return this.clientesCollections.snapshotChanges().pipe(
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
