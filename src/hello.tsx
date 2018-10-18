import { VNode } from 'vue';
import {VueComponent} from './vue-ts-component';
import { Component, Prop, Vue } from 'vue-property-decorator';
import AProps from './hellointerface';

@Component
class HelloComponent extends VueComponent <AProps> {
  @Prop() message!: string;
  //internal
  private msg = 123
  public _columns: any[] = [];

// computed
  get computedMsg () {
    return 'computed ' + this._columns.length
  }

  public created () {
    this._columns = [];
  }

  public render(h: any): VNode {
    return (
      <h1>{ this.message }</h1>
    );
  }
}

export default HelloComponent

