import { Avatar, AvatarFallback, AvatarImage } from "@/common/avatar"
import { Badge } from "@/common/badge"
import { Button } from "@/common/button"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { Link } from "react-router-dom"

export type CardProps = {
  bio: string
  title: string
  name: string
}
export function Card({ name, bio, title }: CardProps) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage alt="Leo Stanton, MD" src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
        <Badge className=" bg-lightprimary text-darkprimary hover:text-primary" variant="secondary">Virtual visit only</Badge>
      </div>
      <p className="text-sm mb-4 flex justify-start items-center">
        {bio}
      </p>
      <h3 className="text-sm font-semibold mb-2 text-darkprimary">Next Available Slots</h3>
      <div className="flex items-center justify-between mb-4">
        <Button className="text-xs rounded-[80px]" variant="outline">
          Today, 3:00PM
        </Button>
        <Button className="text-xs rounded-[80px]" variant="outline">
          Today, 6:30PM
        </Button>
        <Button className="text-xs rounded-[80px]" variant="outline">
          Wed 3/29, 1:30PM
        </Button>
        <div className="flex">
          <Button className="p-1" variant="ghost">
            <ChevronLeftIcon className="h-5 w-5" />
          </Button>
          <Button className="p-1" variant="ghost">
            <ChevronRightIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <Link className="text-xs text-darkprimary hover:text-primary" to='appointment/provider/profile'>
        Check Full profile and availability
      </Link>
    </div>
  )
}