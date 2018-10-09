import { VNode } from 'vue';
import {VueComponent} from './vue-ts-component';
import { Component, Prop, Vue } from 'vue-property-decorator';
import AProps from './hellointerface';

@Component
class HelloComponent extends VueComponent <AProps> {
  @Prop() message!: string;

  public render(h: any): VNode {
    return (
      <h1>{ this.message }</h1>
    );
  }
}

export default HelloComponent

