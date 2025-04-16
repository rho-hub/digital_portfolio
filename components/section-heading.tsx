export default function SectionHeading({
  title,
  centered = false,
}: {
  title: string
  centered?: boolean
}) {
  return (
    <div className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}>
      <h2 className={`text-2xl font-bold text-foreground ${centered ? "text-center" : ""}`}>{title}</h2>
      {!centered && <div className="h-px bg-muted flex-grow max-w-xs"></div>}
    </div>
  )
}
