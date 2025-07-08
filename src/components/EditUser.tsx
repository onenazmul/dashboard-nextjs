"use client"
import { Form, useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "./ui/sheet"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { FormField } from "./ui/form"

const formSchema = z.object({
  username: z.string().min(3, {message: "Username must be ate least 3 characters!"}).max(50),
  email: z.string().email({message: "Invalid email address"}),
  phone: z.string().min(10, {message: "Phone number should be at least 10"}).max(15),
  location: z.string().min(2),
  role: z.enum(["User", "Admin"],)
})
const EditUser = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "nazmul",
      email: "hello@onenazmul.dev",
      phone: "+8801688138948",
      location: "Dhaka, Bangladesh",
      role: "Admin"
    },
  })
  return (
    <SheetContent>
        <SheetHeader>
            <SheetTitle className="mb-4">Edit User</SheetTitle>
            <SheetDescription>
              Hello
                <Form {...form}>
                    <form className="space-y-8">
                        {/* <FormField></FormField> */}
                    </form>
                </Form>
            </SheetDescription>
        </SheetHeader>
        <SheetFooter>
            <Button>
SAVE
            </Button>
        </SheetFooter>
    </SheetContent>
  )
}

export default EditUser