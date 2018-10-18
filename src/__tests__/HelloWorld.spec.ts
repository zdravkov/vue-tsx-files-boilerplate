import { shallowMount } from '@vue/test-utils'
import HelloComponent from '../hello'

describe('Hello', () => {
  test('renders props.message when passed', () => {
    const message = 'new message'
    const wrapper = shallowMount(HelloComponent, {
      propsData: { message }
    });
    expect(wrapper.text()).toMatch(message)
  })
})
