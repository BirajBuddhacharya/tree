import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Wifi, CircleParking, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function RoomCard() {
    return (
        <Card className="w-full p-0 gap-0 overflow-hidden">
            <div className="w-full relative">
                <Image
                    src="/image/roomPlaceholder.jpg"
                    alt="Room Image"
                    width={1000}
                    height={1000}
                    className="object-cover rounded-t-lg w-full aspect-video"
                />
            </div>
            <CardContent className="p-4 py-4 text-white flex flex-col bg-black/50 backdrop-blur-sm space-y-3">
                <h2 className="text-lg font-semibold">Luxury Suite</h2>
                {/* <p className="text-gray-200 mb-4 text-sm">Modern comfort meets elegant design.</p> */}
                <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary" className="flex items-center gap-1">
                        <Wifi className="h-3 w-3" /> Free WiFi
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                        <CircleParking className="h-3 w-3" /> Parking
                    </Badge>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Downtown, City Center</span>
                </div>

                <div className="flex justify-between items-center">
                    <div className="text-lg font-bold">
                        $199<span className="text-sm font-normal">/night</span>
                    </div>
                    <Button variant="secondary" className="flex items-center gap-2" size='sm'>
                        View Details
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
