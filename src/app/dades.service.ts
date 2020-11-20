import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'; //Importem el FireStore

@Injectable({
  providedIn: 'root'
})
export class DadesService {

  constructor(public db: AngularFirestore) { }

  crearItem(nomItem){
    this.db.collection('items').add({
      nom: nomItem
    });
  }

  eliminarItem(id){
    this.db.collection('items').doc(id).delete();
  }

  llegeixItem(){
    return this.db.collection('items').snapshotChanges();
  }

  modificarItem(id, nomItemModificat){
    this.db.collection('items').doc(id).update({
      nom: nomItemModificat
    });
  }

  llegeixUnItem(idItem){
    return this.db.collection('items').doc(idItem).snapshotChanges();
  }
}
