import Image from "next/image"
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { ScrollArea } from "./ui/scroll-area"

const popularContent = [
    {
        id: 1,
        title: "Ecmascript Tutorial",
        badge: "Coding",
        image: "https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg",
        count: 4500
    },
    {
        id: 6,
        title: "Ecmascript Tutorial",
        badge: "Coding",
        image: "https://images.pexels.com/photos/33817/autumn-fall-leaves-leaves-fall-color.jpg",
        count: 3400
    },
    {
        id: 2,
        title: "Ecmascript Tutorial",
        badge: "Coding",
        image: "https://images.pexels.com/photos/219867/pexels-photo-219867.jpeg",
        count: 5050
    },
    {
        id: 3,
        title: "Ecmascript Tutorial",
        badge: "Coding",
        image: "https://images.pexels.com/photos/29332605/pexels-photo-29332605.jpeg",
        count: 5050
    },
    {
        id: 4,
        title: "Ecmascript Tutorial",
        badge: "Coding",
        image: "https://images.pexels.com/photos/259620/pexels-photo-259620.jpeg",
        count: 5050
    },
    {
        id: 5,
        title: "Ecmascript Tutorial",
        badge: "Coding",
        image: "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg",
        count: 5050
    }
]
const latestTransactions = [
    {
        id: 6,
        title: "Ecmascript Tutorial",
        badge: "Coding",
        image: "https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg",
        count: 5050
    },
    {
        id: 7,
        title: "Ecmascript Tutorial",
        badge: "Coding",
        image: "https://images.pexels.com/photos/33817/autumn-fall-leaves-leaves-fall-color.jpg",
        count: 5050
    },
    {
        id: 8,
        title: "Ecmascript Tutorial",
        badge: "Coding",
        image: "https://images.pexels.com/photos/219867/pexels-photo-219867.jpeg",
        count: 5050
    },
    {
        id: 9,
        title: "Ecmascript Tutorial",
        badge: "Coding",
        image: "https://images.pexels.com/photos/29332605/pexels-photo-29332605.jpeg",
        count: 5050
    },
    {
        id: 10,
        title: "Ecmascript Tutorial",
        badge: "Coding",
        image: "https://images.pexels.com/photos/259620/pexels-photo-259620.jpeg",
        count: 5050
    },
    {
        id: 11,
        title: "Ecmascript Tutorial",
        badge: "Coding",
        image: "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg",
        count: 5050
    }
]
const CardList = ( {title}:{title:string} ) => {
   const list = title === "Popular Content" ? popularContent : latestTransactions
  return (
    <ScrollArea className="h-[375px]">
        <h1 className="text-lg font-medium mb-6">{title}</h1>
        <div className="flex gap-4 flex-col">
            {list.map(item => (
                <Card key={item.id} className="flex-row gap-2 items-center justify-between p-4">
                    <div className="w-12 h-12 relative rounded-sm overflow-hidden">
                        <Image src={item.image} alt={item.title} fill className="object-cover"/>
                    </div>
                    <CardContent className="p-0 flex-1">
                        <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                        <Badge> {item.badge} </Badge>
                    </CardContent>
                    <CardFooter className="px-2">
                        { item.count/1000 }K
                    </CardFooter>
                </Card>
            ))}
        </div>
    </ScrollArea>
  )
}

export default CardList