import { createElement, Component, render } from './toy-react';

class MyCompent extends Component {
  render() {
    return (
      <div>
        <h1>my component</h1>
        {this.children}
      </div>
    );
  }
}

render(
  <MyCompent id="a" class="c">
    <div>abc</div>
    <div></div>
    <div></div>
  </MyCompent>,
  document.body
);
