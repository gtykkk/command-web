import MainHeader from "./header/MainHeader"
import MobileHeader from "./header/MobileHeader"

const Header = () => {
  return (
    <div>
      <div className="hidden md:block">
        <MainHeader />
      </div>
      <div className="md:hidden">
        <MobileHeader />
      </div>
    </div>
  )
}
export default Header