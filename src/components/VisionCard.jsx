import { Pencil, Trash2 } from "lucide-react"

function VisionCard({vision, onEdit, onDelete}) {
  const images = vision.images ?? []

  return (
    <article className="glass pressable rounded-3xl p-5 space-y-4 transition-all duration-300 hover:scale-[1.015] hover:bg-white/[0.06] active:scale-[0.97] group">
      <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition" onClick={() => onEdit(vision)}>
        <button className="icon-btn pressable" onClick={() => onEdit(vision)}>
          <Pencil size={14} />
        </button>
        <button className="icon-btn pressable text-red-400" onClick={() => onDelete(vision.id)}>
          <Trash2 size={14} />
        </button>
      </div>

      <h3 className="text-sm tracking-wide opacity-80">
        {vision.title}
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {images.map((img, i) => (
          <div key={i} tableindex={0} className="relative rounded-2xl overflow-hidden group/img">
            <img src={img} className="w-full h-full object-contain transition-transform duration-300 group-hover/img:scale-[1.04]" />
            {vision.note && (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 scale-[0.98] transition-all duration-300 ease-out delay-100 group-hover/img:opacity-100 group-hover/img:scale-100 group-focus-within/img:opacity-100 flex items-center justify-center p-4">
                <p className="text-sm text-center opacity-90 leading-relaxed">
                  {vision.note}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

    </article>
  )
}

export default VisionCard