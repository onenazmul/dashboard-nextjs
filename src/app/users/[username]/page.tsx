import CardList from "@/components/CardList"
import EditUser from "@/components/EditUser"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { BadgeCheck, Candy, Shield, SlashIcon } from "lucide-react"
import Link from "next/link"

const SingeUserPage = () => {
  return (
    <div className="page-wrap">
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href={"/"}>Dashboard</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <SlashIcon/>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href={"/users"}>Users</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <SlashIcon/>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbPage>
                        Nazmul H
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        <div className="inner-page flex flex-col lg:flex-row gap-8 mt-6">
            <div className="w-full lg:w-1/3 space-y-6">
                {/* user badges */}
                <div className="p-4 rounded-lg bg-primary-foreground">
                    <h2 className="text-lg font-semibold">Badges</h2>
                    <div className="flex flex-row gap-4 mt-4">
                        <HoverCard>
                            <HoverCardTrigger>
                                <BadgeCheck size={36} className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"/>
                            </HoverCardTrigger>
                            <HoverCardContent className="text-center p-3">
                                <h3 className="font-bold mb-2">Verified User</h3>
                                <p className="text-sm text-muted-foreground">This user has been Verified by Admin</p>
                            </HoverCardContent>
                        </HoverCard>
                        <HoverCard>
                            <HoverCardTrigger>
                                <Shield size={36} className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"/>
                            </HoverCardTrigger>
                            <HoverCardContent className="p-3">
                                <h3 className="font-bold mb-2">Verified User</h3>
                                <p className="text-sm text-muted-foreground">This user has been Verified by Admin</p>
                            </HoverCardContent>
                        </HoverCard>
                        <HoverCard>
                            <HoverCardTrigger>
                                <Candy size={36} className="rounded-full bg-green-500/30 border-1 border-green-500/50 p-2"/>
                            </HoverCardTrigger>
                            <HoverCardContent className="text-center p-3">
                                <h3 className="font-bold mb-2">Verified User</h3>
                                <p className="text-sm text-muted-foreground">This user has been Verified by Admin</p>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                </div>
                {/* information */}
                <div className="p-4 rounded-lg bg-primary-foreground">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">User Information</h2>
                        <Sheet>
                            <SheetTrigger>
                                Edit Profile
                            </SheetTrigger>
                            <EditUser />
                        </Sheet>
                    </div>
                    <div className="space-y-4 mt-4">
                        <div className="flex gap-2 flex-col mb-8">
                            <p className="text-sm text-muted-foreground">
                                Profile Completion
                            </p>
                            <Progress value={80} />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">Username:</span>
                            <span>nazmul</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">Email:</span>
                            <span>hello@onenazmul.dev</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">Phone Number:</span>
                            <span>+8801688138948</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">Location:</span>
                            <span>Dhaka, Bangladesh</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">Role:</span>
                            <Badge>
                                Admin
                            </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Joined on July 2025</p>
                    </div>
                </div>
                {/* cardlist */}
                <div className="p-4 rounded-lg bg-primary-foreground">
                    <CardList title="Recent Actions" />
                </div>
            </div>
            <div className="w-full lg:w-2/3 space-y-6">
                {/* user card */}
                <div className="p-4 rounded-lg bg-primary-foreground">
                    user card
                </div>
                {/* chart */}
                <div className="p-4 rounded-lg bg-primary-foreground">
                    Chart
                </div>
                {/* cardlist 
                <div className="p-4 rounded-lg bg-primary-foreground">
                    <CardList title="Recent Actions" />
                </div>*/}
            </div>
        </div>
    </div>
  )
}

export default SingeUserPage