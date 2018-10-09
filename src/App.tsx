import Vue, { VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import HelloWorld1 from './hello';

@Component
export default class App extends Vue {
  private text = 'Hello World!';

  public render(h: any): VNode {
    return (
      <HelloWorld1 message={this.text}></HelloWorld1>
    );
  }
}

