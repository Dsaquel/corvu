import Tooltip from 'corvu/tooltip'
import { type VoidComponent } from 'solid-js'

const TooltipExample: VoidComponent = () => {
  return (
    <div class="@xl:max-w-[400px] relative my-auto w-full max-w-[250px] overflow-hidden rounded-lg">
      <Tooltip.Root
        placement="top"
        floatingOptions={{
          offset: 12,
          flip: true,
          shift: true,
        }}
      >
        <Tooltip.Trigger class="bg-corvu-200 ml-[200px] rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            class="text-corvu-dark size-5"
          >
            <rect width="256" height="256" fill="none" />
            <line
              x1="108"
              y1="80"
              x2="216"
              y2="80"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            />
            <line
              x1="40"
              y1="80"
              x2="68"
              y2="80"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            />
            <line
              x1="172"
              y1="176"
              x2="216"
              y2="176"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            />
            <line
              x1="40"
              y1="176"
              x2="132"
              y2="176"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            />
            <line
              x1="108"
              y1="56"
              x2="108"
              y2="104"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            />
            <line
              x1="172"
              y1="152"
              x2="172"
              y2="200"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            />
          </svg>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content class="bg-corvu-1000 corvu-open:animate-in corvu-open:fade-in-50 corvu-open:slide-in-from-top-2 corvu-closed:animate-out corvu-closed:fade-out-50 corvu-closed:slide-out-to-top-2 rounded-md p-4 text-white">
            <Tooltip.Arrow class="text-corvu-1000" />
            <p>Some very cool tooltip!</p>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </div>
  )
}

export default TooltipExample
