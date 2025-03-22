import { routes } from "./routes"
import { Home, Settings, User } from "lucide-react"

export const columns = [
    {
      accessorKey: "id",
      header: "Id"
    },
    {
      accessorKey: "userId",
      header: "User Id",
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "body",
      header: "Body",
    },
]

export const items = [
  {
    title: "Dashboard",
    url: routes.DASHBOARD,
    icon: Home,
  },
  {
    title: "Settings",
    url: routes.SETTINGS,
    icon: Settings,
  },
  {
    title: "Profile",
    url: routes.PROFILE,
    icon: User,
  },
]