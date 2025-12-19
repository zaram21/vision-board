function AddVision({onAdd}) {
  const fileHandler = async (e) => {
    const files = Array.from(e.target.files)
    const images = await Promise.all(
      files.map((f) => 
      new Promise(res => {
        const r = new FileReader()
        r.onload = () => res(r.result)
        r.readAsDataURL(f)
      }))
    )
    onAdd({
      id: crypto.randomUUID(),
      title: "",
      images,
      note: ""
    })
  }

  return (
    <label className="glass pressable block rounded-2xl p-6 text-center cursor-pointer hover:bg-white/[0.06]">
      <span className="opacity-70 text-sm">
      + افزودن آرزو
      </span>
      <input type="file" multiple hidden accept="images/*" onChange={fileHandler} />
    </label>
  )
}

export default AddVision