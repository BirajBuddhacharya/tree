import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
export default function HeaderAction() {
    return (
        <div className="flex items-center justify-between flex-col gap-2 sm:flex-row">
            <div className='relative'>
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2" size={16} />
                <Input
                    type="text"
                    placeholder="Search rooms..."
                    className="pl-14 pr-4 py-5 rounded-3xl bg-white w-80"
                />
            </div>
            <div className="flex space-x-4">
                <Button className="px-8 py-2 rounded-lg">
                    <Filter size='16' />
                    Filter
                </Button>
            </div>
        </div>
    );
}