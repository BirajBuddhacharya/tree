import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="p-4 bg-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-black text-lg font-bold flex gap-5 justify-center items-center">
                    <Link href="/">
                        <Image src="/image/logo.png" alt="Logo" width={50} height={50} />
                    </Link>
                    <div className="relative">
                        <Search size='16' className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                        <Input placeholder="Search..." className="text-sm font-normal w-64 px-4 pl-8" />
                    </div>
                </div>
                <div className="flex gap-8 items-center">
                    <ul className="flex space-x-8">
                        <li><Link href="/" className="text-black hover:text-gray-400">Home</Link></li>
                        <li><Link href="/room" className="text-black hover:text-gray-400">Browse Rooms</Link></li>
                        <li><Link href="/addProperty" className="text-black hover:text-gray-400">Add Property</Link></li>
                    </ul>
                    <Link href="/login" className="text-black hover:text-gray-400">
                        <Button className="px-6 rounded-3xl">
                            Login
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}