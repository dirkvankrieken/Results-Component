const colorClasses = {
  lightred: 'hsl(0, 100%, 67%)',
  orangeyyellow: 'hsl(39, 100%, 56%)',
  greenteal: 'hsl(166, 100%, 37%)',
  cobaltblue: 'hsl(234, 85%, 45%)',
}

const bgColorClasses = {
  lightred: 'hsl(0, 100%, 97%)',
  orangeyyellow: 'hsl(39, 100%, 97%)',
  greenteal: 'hsl(166, 100%, 97%)',
  cobaltblue: 'hsl(234, 85%, 97%)',
}

export default function Category({ category, color, icon, score }) {
  return (
    <div
      id={category}
      className="p-4 mb-4 mt-4 flex justify-between rounded-lg"
      style={{ backgroundColor: bgColorClasses[color] }}
    >
      <div className="flex gap-2" style={{ color: colorClasses[color] }}>
        <img src={icon} alt={`${category} icon`} />
        {category}
      </div>
      <div className="reaction-score">
        <span id="score">{score}</span>
        <span className="text-gray-600"> / 100</span>
      </div>
    </div>
  )
}
