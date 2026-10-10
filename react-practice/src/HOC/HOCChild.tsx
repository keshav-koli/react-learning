import withDarkMode from "./withDarkMode"

const HOCChild = (props:{id:number,name:string}) => {
  return (
    <div>HOCChild
        <h1>Id-{props.id}</h1>
        <h1>Name-{props.name}</h1>

    </div>
  )
}

export default withDarkMode(HOCChild)