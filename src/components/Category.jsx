import Iconreaction from '../images/icon-reaction.svg'

const colorClasses = {
  lightred: 'hsl(0, 100%, 67%)',
  orangeyyellow: 'hsl(39, 100%, 56%)',
  greenteal: 'hsl(166, 100%, 37%)',
  cobaltblue: 'hsl(234, 85%, 45%)',
}

const bgColorClasses = {
  lightred: 'hsl(0, 100%, 96%)',
  orangeyyellow: 'hsl(39, 100%, 96%)',
  greenteal: 'hsl(166, 100%, 96%)',
  cobaltblue: 'hsl(234, 85%, 96%)',
}

export default function Category({ category, color, icon }) {
  return (
    <div
      id={category}
      className="p-4 mb-5 mt-5 flex justify-between"
      style={{ backgroundColor: bgColorClasses[color] }}
    >
      <div className={'flex'} style={{ color: colorClasses[color] }}>
        <img src={icon} alt={`${category} icon`} />
        {category}
      </div>
      <div className="reaction-score">
        <span className="">80 </span>
        <span className="text-gray-600">/ 100</span>
      </div>
    </div>
  )
}
