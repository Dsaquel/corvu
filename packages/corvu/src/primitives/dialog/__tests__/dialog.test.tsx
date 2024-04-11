import Dialog from '..'
import { render } from '@solidjs/testing-library'

const LABEL = 'Stop your scaring me'
const CONTENT = 'Stop being rachet'
const CLOSE = 'Close'

describe('<Dialog', () => {
  it('render anatomy', async () => {
    const wrapper = render(() => (
      <Dialog.Root initialOpen>
        <Dialog.Trigger />
        <Dialog.Portal>
          <Dialog.Content>
            <Dialog.Close>{CLOSE}</Dialog.Close>
            <Dialog.Label>{LABEL}</Dialog.Label>
            <Dialog.Description>{CONTENT}</Dialog.Description>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    ))

    const close = wrapper.container.querySelector('[data-corvu-dialog-close]')
    const label = wrapper.container.querySelector('[data-corvu-dialog-label]')
    const description = wrapper.container.querySelector(
      '[data-corvu-dialog-description]',
    )

    const dialog = wrapper.container.querySelector('[role="dialog"]')

    expect(dialog).toBeTruthy()
    expect(dialog).toHaveAttribute('data-open')
    expect(dialog).toHaveAttribute('data-corvu-dialog-content')
    expect(dialog).toHaveAttribute('aria-modal', true)

    expect(close).toEqual(CLOSE)
    expect(label?.textContent).toEqual(LABEL)
    expect(description?.textContent).toEqual(CONTENT)
  })
})
