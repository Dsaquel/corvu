import { createEffect, createSignal, on, onMount, untrack } from 'solid-js'
import { fireEvent, render } from '@solidjs/testing-library'
import Accordion from '..'

describe('<Accordion', () => {
  const firstContent = 'Content1'
  const secondContent = 'Content2'
  const thirdContent = 'Content3'

  it('create', async () => {
    const wrapper = render(() => (
      <Accordion.Root initialValue="1">
        <Accordion.Item value="1">
          <Accordion.Trigger>Trigger1</Accordion.Trigger>
          <Accordion.Content>{firstContent}</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Trigger>Trigger2</Accordion.Trigger>
          <Accordion.Content>{secondContent}</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Trigger>Trigger3</Accordion.Trigger>
          <Accordion.Content>{thirdContent}</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    ))

    const triggers = () => [
      ...wrapper.container.querySelectorAll('[data-corvu-accordion-trigger]'),
    ]

    const contents = () => [
      ...wrapper.container.querySelectorAll('div[data-expanded]'),
    ]

    expect(triggers()).toHaveLength(3)

    const activeContent = (content: string) =>
      expect(contents().at(0)?.textContent).toBe(content)

    activeContent(firstContent)

    const secondTrigger = triggers().at(1)!
    fireEvent.click(secondTrigger)

    expect(contents()).toHaveLength(1)

    activeContent(secondContent)
  })

  it('multiple', () => {
    const onValueChange = vi.fn()
    const [values, setValues] = createSignal(['1'])

    createEffect(
      on(
        values,
        () => {
          onValueChange()
        },
        { defer: true },
      ),
    )

    const wrapper = render(() => (
      <Accordion.Root value={values()} onValueChange={setValues} multiple>
        <Accordion.Item value="1">
          <Accordion.Trigger>Trigger1</Accordion.Trigger>
          <Accordion.Content>{firstContent}</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="2">
          <Accordion.Trigger>Trigger2</Accordion.Trigger>
          <Accordion.Content>{secondContent}</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="3">
          <Accordion.Trigger>Trigger3</Accordion.Trigger>
          <Accordion.Content>{thirdContent}</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    ))

    const triggers = () => [
      ...wrapper.container.querySelectorAll('[data-corvu-accordion-trigger]'),
    ]

    const contents = () => [
      ...wrapper.container.querySelectorAll('div[data-expanded]'),
    ]

    const activeContent = (index: number, content: string) =>
      expect(contents().at(index)?.textContent).toBe(content)

    activeContent(0, firstContent)
    expect(untrack(values)).toEqual(['1'])
    expect(onValueChange).not.toHaveBeenCalled()
    const thirdTrigger = triggers().at(2)!
    fireEvent.click(thirdTrigger)
    expect(contents()).toHaveLength(2)
    expect(untrack(values)).toEqual(['1', '3'])
    expect(onValueChange).toHaveBeenCalledTimes(1)
    activeContent(0, firstContent)
    activeContent(1, thirdContent)
    const firstTrigger = triggers().at(0)!
    fireEvent.click(firstTrigger)
    expect(contents()).toHaveLength(1)
    expect(untrack(values)).toEqual(['3'])
    expect(onValueChange).toHaveBeenCalledTimes(2)
    expect(contents().at(0)?.textContent).not.toBe(firstContent)
  })

  it('effect on value', () => {
    const [values, setValues] = createSignal(['1'])

    onMount(() => {
      setValues([...values(), '2'])
    })

    const wrapper = render(() => (
      <Accordion.Root value={values()} onValueChange={setValues} multiple>
        <Accordion.Item value="1">
          <Accordion.Trigger>Trigger1</Accordion.Trigger>
          <Accordion.Content>{firstContent}</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="2">
          <Accordion.Trigger>Trigger2</Accordion.Trigger>
          <Accordion.Content>{secondContent}</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="3">
          <Accordion.Trigger>Trigger3</Accordion.Trigger>
          <Accordion.Content>{thirdContent}</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    ))
    const contents = () => [
      ...wrapper.container.querySelectorAll('div[data-expanded]'),
    ]

    expect(contents().at(0)?.textContent).toBe(firstContent)
    expect(contents().at(1)?.textContent).toBe(secondContent)
  })
})
