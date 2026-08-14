export function LoadingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-white/3 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
    </div>
  )
}
