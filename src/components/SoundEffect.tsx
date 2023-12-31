import { useSound } from '../composables/useSound'
import { store, setStore } from '../store'

export function SoundEffect() {
  return (
    <div w-full>
      <div text-3xl mb-10>
        Audio Effect Selction
      </div>
      <div flex='~ wrap' justify-center gap-6>
        {useSound.HowlList.map((_, index) => {
          return (
            <div
              border
              p-10
              rd-2
              class={store.sound === index ? 'bg-white color-black' : ''}
              onClick={() => setStore('sound', index)}>
              Audio {index + 1}
            </div>
          )
        })}
      </div>
    </div>
  )
}
