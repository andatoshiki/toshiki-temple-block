import { store, setStore } from '../store'

export function OtherOptions() {
  const [tips, setStips] = createSignal('')
  createEffect(() => setStips(store.isCount ? '开启' : '关闭'))

  function setCacheSetting(checked: boolean) {
    setStore('isCount', checked)
    // alert(`缓存功能已${tips()}`)
  }

  function clearCache() {
    setStore('count', 0)
    alert('You are a pathetic atheist with no merits at all!')
  }

  return (
    <div w-full>
      <div text-3xl mb-10>
        Others
      </div>
      <div>
        <div
          flex
          justify-center
          items-center
          gap-2
          mb-2
          onClick={e => e.stopPropagation()}>
          Cache:
          <USwitch checked={store.isCount} onChange={setCacheSetting} />
        </div>
        <div>
          <div color-blue onClick={clearCache}>
            Clear Cache
          </div>
        </div>
      </div>
    </div>
  )
}
