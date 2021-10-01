import { useContext } from "react"
import { DrawerContext } from "../contexts/DrawerContext"


export const useDrawerResponsive = () => {
    return useContext(DrawerContext)
}