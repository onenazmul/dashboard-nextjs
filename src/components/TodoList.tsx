"use client"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "./ui/calendar"
import { Card, CardContent } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { ScrollArea } from "./ui/scroll-area"
import { useState } from "react"
import { Button } from "./ui/button"
import { format } from "date-fns"

const todos = [
  {
    id: "recents",
    label: "dolor sit amet consectetur adipisicing elit.",
    checked: true
  },
  {
    id: "home",
    label: "dolor sit amet consectetur adipisicing elit.",
    checked: false
  },
  {
    id: "applications",
    label: "dolor sit amet consectetur adipisicing elit.",
    checked: true
  },
  {
    id: "desktop",
    label: "dolor sit amet consectetur adipisicing elit.",
    checked: true
  },
  {
    id: "downloads",
    label: "dolor sit amet consectetur adipisicing elit.",
    checked: false
  },
  {
    id: "documents",
    label: "Incidunt, molestiae?",
    checked: false
  }
]


const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [open, setOpen] = useState(false)
  return (
    <div>
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button className="w-full mb-4">
                    <CalendarIcon />
                    { date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
                <Calendar mode="single" selected={date} onSelect={date=>{
                    setDate(date) 
                    setOpen(false)
                    }} className="w-full"/>
            </PopoverContent>
        </Popover>
        <ScrollArea className="rounded-md p4 h-[350px]">
            <div className="flex flex-col gap-4">
                {todos.map( item => (
                    <Card key={item.id} className="p-3">
                        <CardContent className="flex-row flex gap-2 p-0 items-center">
                            <Checkbox id={item.id} defaultChecked={item.checked}/>
                            <Label htmlFor={item.id} className="text-muted-foreground text-sm">{item.label}</Label>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </ScrollArea>
    </div>
  )
}

export default TodoList