export default function MovieInfoItem({title, value}: {title: string, value: string}) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="font-normal">{value}</p>
    </div>
  )
}