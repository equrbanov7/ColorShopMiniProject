import Categories from "./componenets/Categories"
import NewArrival from "./componenets/NewArrival"
import Slider from "./componenets/Slider"

const ClientHome = () => {
  return (
    <div className="ClientHome">
        <Slider />

        <Categories />

        <NewArrival />
    </div>
  )
}

export default ClientHome