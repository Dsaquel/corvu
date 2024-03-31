import Accordion from 'corvu/accordion'
import { createEffect, createSignal, type VoidComponent } from 'solid-js'

const AccordionExample: VoidComponent = () => {
  const [value, setValue] = createSignal('1')

  createEffect(() => console.log(value()))

  return (
    <div class="@xl:max-w-[400px] my-auto w-full max-w-[250px] overflow-hidden rounded-lg">
      <Accordion.Root
        value={value()}
        onValueChange={setValue}
        collapseBehavior="remove"
      >
        <Accordion.Item value="1">
          <h3>
            <Accordion.Trigger class="border-corvu-200 bg-corvu-50 text-corvu-dark hover:bg-corvu-100 focus-visible:bg-corvu-200 w-full border-b px-4 py-3 text-left font-medium transition-all duration-100 focus-visible:outline-none">
              What is corvu?
            </Accordion.Trigger>
          </h3>
          <Accordion.Content class="border-corvu-200 bg-corvu-100 corvu-expanded:animate-expand corvu-collapsed:animate-collapse overflow-hidden border-b">
            <div class="px-4 py-2">
              A collection of unstyled, customizable UI primitives for SolidJS.
            </div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="2">
          <h3>
            <Accordion.Trigger class="border-corvu-200 bg-corvu-50 text-corvu-dark hover:bg-corvu-100 focus-visible:bg-corvu-200 w-full border-b px-4 py-3 text-left font-medium transition-all duration-100 focus-visible:outline-none">
              Is it accessible?
            </Accordion.Trigger>
          </h3>
          <Accordion.Content class="border-corvu-200 bg-corvu-100 corvu-expanded:animate-expand corvu-collapsed:animate-collapse overflow-hidden border-b">
            <div class="px-4 py-2">
              It has full keyboard support and adheres to the WAI-ARIA pattern
              for accordions.
            </div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="3">
          <h3>
            <Accordion.Trigger class="border-corvu-200 bg-corvu-50 text-corvu-dark hover:bg-corvu-100 focus-visible:bg-corvu-200 w-full border-b px-4 py-3 text-left font-medium transition-all duration-100 focus-visible:outline-none">
              Can I customize it?
            </Accordion.Trigger>
          </h3>
          <Accordion.Content class="border-corvu-200 bg-corvu-100 corvu-expanded:animate-expand corvu-collapsed:animate-collapse overflow-hidden border-b">
            <div class="px-4 py-2">
              Yes, check out the API reference at the bottom for all options.
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}

export default AccordionExample
