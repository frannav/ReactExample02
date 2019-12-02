import React, { CSSProperties } from "react";

export class Login extends React.Component {
  render() {
    const style: CSSProperties = {
      display: 'flex',
      flexDirection: "column",
      border: 'solid 1px red'
    };

    return <div>
      <form style={style}>
        <input name="email" placeholder="email"/>
        <input name="password" type="password" placeholder="password"/>
        <button>Enviar</button>
      </form>
    </div>
  }
}
