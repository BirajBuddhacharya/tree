import NavBar from "@/components/AppComponents/NavBar";
export default function Home() {
    return (
        <div className="w-full">
            <NavBar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
                <p className="text-lg text-gray-700">This is a simple Next.js application.</p>
            </div>
        </div>
    );
}