import Vue, { VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import HelloWorld1 from './hello';

@Component
export default class App extends Vue {
  private text = 'Hello World!';

  public mounted() {
  };

  some (e:any){
    console.log('someChange')
  }

  clickHandler (e:any){
    this.text = 'new'
  }
 
 

  public render(h: any): VNode {
    return (
      // @ts-ignore
      <div>
         <button onClick={this.clickHandler}>Click to increase counter</button>
      <HelloWorld1 message={this.text} onSomeChange={this.some} ></HelloWorld1>
      </div>
      
    );
  }
}

