import RoomCard from "./card"
export default function FilteredRooms() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 justify-center items-center">
            {Array.from({ length: 10 }).map((_, index) => (
            <RoomCard key={index} />
            ))}
        </div>
    );
}
