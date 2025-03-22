import Iconmemory from '../images/icon-memory.svg'
import Iconreaction from '../images/icon-reaction.svg'
import Iconverbal from '../images/icon-verbal.svg'
import Iconvisual from '../images/icon-visual.svg'

import Category from './Category.jsx'

export default function Summary() {
  return (
    <>
      <div className="p-8">
        <h1 className="pb-5 text-lg font-bold">Summary</h1>
        <Category category="Reaction" color="lightred" icon={Iconreaction} />
        <Category category="Memory" color="orangeyyellow" icon={Iconmemory} />
        <Category category="Verbal" color="greenteal" icon={Iconverbal} />
        <Category category="Visual" color="cobaltblue" icon={Iconvisual} />
        <div id="button">Continue</div>
      </div>
    </>
  )
}
