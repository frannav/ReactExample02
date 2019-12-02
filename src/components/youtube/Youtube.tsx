import React from "react";
import { NumberPicker } from "../numberPicker/NumberPicker";

export class Youtube extends React.Component {

  subirVolumen(nuevoVolumen: number) {
    console.log('Subo el volumen a ', nuevoVolumen);
  }

  render() {
    return <div>
      <h1>aqui mi video</h1>
      <NumberPicker initialCounter={20}
                    onIncrement={this.subirVolumen}/>
    </div>
  }
}
