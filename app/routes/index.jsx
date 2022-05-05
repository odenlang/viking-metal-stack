const split = (str, delim) => str.split(delim)
const join = (arr, delim) => arr.join(delim)
const map = (arr, cb) => arr.map(cb)

function titleCase (str) {
  return (
    str
    |> split(' ')
    |> map(str => str[0].toUpperCase() + str.slice(1).toLowerCase())
    |> join(' ')
  )
}

export default function Index () {
  return (
    'make awesome'
    |> titleCase()
    |> (msg => <div className='text-xl font-bold'>{msg}</div>)()
  )
}
