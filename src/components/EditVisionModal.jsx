import { useEffect, useState } from "react"

function EditVisionModal({ vision, onSave, onClose }) {
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")

  useEffect(() => {
    setTitle(vision.title)
    setNote(vision.note || "")
  }, [vision])

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur flex items-center sm:items-center justify-center">
      <div className="glass w-full sm:w-96 rounded-3xl sm:rounded-3xl p-6 space-y-4 animate-[slideUp_0.25s_ease-out]">

        <input placeholder="آرزوی جدید..." value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-transparent border border-white/50 rounded p-2 outline-none" />

        <textarea placeholder="پس توضیحات؟" rows={4} value={note} onChange={(e) => setNote(e.target.value)} className="w-full bg-transparent border rounded p-2 resize-none outline-none border-white/50" />

        <div className="flex justify-end gap-4 text-sm">
          <button onClick={onClose} className="opacity-60">
            لغو
          </button>
          <button onClick={() => onSave({...vision, title, note})} >
            ذخیره
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditVisionModal