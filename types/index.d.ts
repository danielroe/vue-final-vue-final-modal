import {
  App,
  Ref,
  SetupContext,
  EmitsOptions,
  ComponentPublicInstance
} from 'vue'

interface VueFinalModal {
  install(app: App): void
}

interface VueFinalModalInfo {
  uid: symbol
  name: string
  emit: SetupContext<EmitsOptions>
  vfmContent: Ref<HTMLDivElement>
  getAttachElement(): false | HTMLElement
  modalStackIndex: Ref<number | null>
  visibility: {
    modal: boolean
    overlay: boolean
  }
  handleLockScroll(): void
  hideOverlay: boolean
  focusTrap: boolean
}

export type VueFinalModalComponent = ComponentPublicInstance & {
  vfmContainer: HTMLDivElement,
  vfmContent: HTMLDivElement
}

export type VusFinalModalProperty = {
  openedModals: VueFinalModalInfo[]
  modals: VueFinalModalInfo[]
  show(name: string): void
  hide(name: string): void
  hideAll(): void
  toggle(name: string, show: boolean): void
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    readonly $vfm: VusFinalModalProperty
  }
}

declare const VueFinalModal: VueFinalModal
export default VueFinalModal
