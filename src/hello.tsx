import Vue, { VNode } from "vue";
import Component from 'vue-class-component';
import HelloWorldInterface from './helloInterface';

@Component({
  props: {
    message: String,
    someChange: Function
  }
})
class HelloComponent extends Vue implements HelloWorldInterface{
  constructor(){
    super()
  }
  public msg = 123;
  public _columns: any[] = [];
  public created() {
    this._columns = [];
  };

  public updated() {
    console.log('updated')
  };

  public mounted() {
    this.$emit('someChange', { a: 1 });
  };

  get computedMsg () {
    return 'computed ' + this._columns.length
  }

  public render(h: any): VNode {
    return (
      <h1>{ this.$props.message }</h1>
    );
  }
}

export default HelloComponent

