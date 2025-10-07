import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { h } from 'vue'

describe('Example Test', () => {
    it('mounts a component', () => {
        const TestComponent = {
            template: '<div>Hello World</div>'
        }

        const wrapper = mount(TestComponent)
        expect(wrapper.text()).toBe('Hello World')
    })

    it('performs basic assertion', () => {
        expect(1 + 1).toBe(2)
    })
})
