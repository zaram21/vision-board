function ConfirmDeleteModal({vision, onCancle, onConfirm}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur flex items-center justify-center">
      <div className="glass w-[90%] max-w-sm rounded-3xl p-6 space-y-6 text-center">
         <h3 className="text-sm">حذف این آرزو؟</h3>
         <p className="text-xs opacity-60 leading-relaxed">این عمل قابل بازگشت نیست</p>
         <div className="flex gap-4">
            <button onClick={onCancle} className="flex-1 py-2 rounded-xl glass pressable opacity-70">
               خیر
            </button>
            <button onClick={onConfirm} className="flex-1 py-2 rounded-xl pressable bg-red-500/15 text-red-400 border border-red-500/30">
               بله، حذف کن
            </button>
         </div>
      </div>
    </div>
  )
}

export default ConfirmDeleteModal