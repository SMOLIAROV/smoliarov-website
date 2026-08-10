export function ReviewCardMessage({ message }: { message: string }) {
  return (
    <div className="flex-1">
      <div className="mb-4 text-4xl text-white/20">“</div>
      <p className="text-sm leading-relaxed text-white/80 md:text-base">
        {message}
      </p>
    </div>
  )
}
