import { createContext } from "react"
import { UserInfo } from "../interface"

type Props = {
  data: UserInfo[]

  setData: any
}

const UserContext = createContext({} as Props)

export default UserContext
