import { useEffect, useState } from 'react'
import Category from './Category.jsx'

export default function Summary() {
  const [data, setData] = useState([])
  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        return response.json()
      })
      .then((myJson) => {
        setData(myJson)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="p-8 box-border md:flex-1">
        <h1 className="pb-2 text-2xl font-bold">Summary</h1>
        {data.map((item, index) => {
          return (
            <Category
              key={index}
              category={item.category}
              color={item.color}
              icon={item.icon}
              score={item.score}
            />
          )
        })}
        <div
          id="button"
          className="rounded-full bg-dark-gray-blue text-white p-4 text-center hover:cursor-pointer hover:bg-(image:--bg-results-gradient)"
        >
          Continue
        </div>
      </div>
    </>
  )
}
