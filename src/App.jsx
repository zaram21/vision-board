import { useEffect, useState } from "react"
import AddVision from "./components/AddVision"
import ConfirmDeleteModal from "./components/ConfirmDeleteModal"
import EditVisionModal from "./components/EditVisionModal"
import VisionCard from "./components/VisionCard"

function App() {
  const [visions, setVisions] = useState(() => {
    const saved = localStorage.getItem("visions")
    return saved ? JSON.parse(saved) : []
  })
  const [editingVision, setEditingVision] = useState(null)
  const [deleteTarget, setDeletTarget] = useState(null)

  useEffect(() => {
    localStorage.setItem("visions", JSON.stringify(visions))
  },[visions])

  return (
    <main className="min-h-screen max-w-6xl mx-auto px-4 py-10 space-y-12">
      <header className="text-center space-y-2">
        <h1 className="text-2xl tracking-wide">
        تابلو آرزوها
        </h1>
        <p className="text-xs opacity-60 text-[var(--accent)]">
          رؤیاها وقتی دیده می‌شن، واقعی‌تر می‌شن   
        </p>
      </header>

      <AddVision onAdd={(v) => setVisions((p) => [v, ...p])} />

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visions.map((v) => (
          <VisionCard key={v.id} vision={v} onEdit={setEditingVision} onDelete={() => setDeletTarget(v)} />
        ))}
      </section>
      {editingVision && !deleteTarget && (
        <EditVisionModal 
          vision={editingVision} 
          onClose={() => setEditingVision(null)} onSave={(updated) => setVisions((p) => p.map((v) => v.id === updated.id ? updated : v))} />
      )}
      {deleteTarget && (
        <ConfirmDeleteModal
          vision={deleteTarget}
          onCancle={() => {
            setDeletTarget(null)
            setEditingVision(null)}}
          onConfirm={() => {
            setVisions(p => p.filter(v => v.id !== deleteTarget.id))
            setDeletTarget(null)
            setEditingVision(null)
          }} />
      )}

    </main>
  )
}

export default App