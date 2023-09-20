export function Volume() {
  return (
    <div w-full>
      <div text-3xl mb-10>Background Volume</div>
      <div onClick={e => e.stopPropagation()}>
        <Silder />
      </div>
    </div>
  )
}
