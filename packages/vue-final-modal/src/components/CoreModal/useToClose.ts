import type { Ref } from 'vue'
import { ref } from 'vue'
import type { ComponentEmit, ComponentProps } from 'vue-component-type-helpers'
import type CoreModal from './CoreModal.vue'

export function useToClose(
  props: ComponentProps<typeof CoreModal>,
  emit: ComponentEmit<typeof CoreModal>,
  options: {
    vfmRootEl: Ref<HTMLDivElement | undefined>
    vfmContentEl: Ref<HTMLDivElement | undefined>
    visible: Ref<boolean>
    modelValueLocal: Ref<boolean>
  }) {
  const { vfmRootEl, vfmContentEl, visible, modelValueLocal } = options
  const lastMousedownEl = ref<EventTarget | null>()

  function onEsc() {
    if (visible.value && props.escToClose)
      modelValueLocal.value = false
  }

  function onMousedown(e?: MouseEvent) {
    lastMousedownEl.value = e?.target
  }

  function onMouseupRoot(): void {
    // skip when the lastMousedownEl didn't equal vfmRootEl
    if (lastMousedownEl.value !== vfmRootEl.value)
      return

    if (props.clickToClose) {
      modelValueLocal.value = false
    }
    else {
      vfmContentEl.value?.focus()
      emit('clickOutside')
    }
  }

  return {
    onEsc,
    onMouseupRoot,
    onMousedown,
  }
}
