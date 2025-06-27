'use client'

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const roomOptions = ["single", "double", "suite", "deluxe"];

export default function Sidebar() {
  const [formData, setFormData] = useState({
    minPrice: 0,
    maxPrice: 10000,
    location: "",
    roomType: "single",
    amenities: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name.includes("Price") ? Number(value) : value,
    }));
  };

  const handleRoomTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, roomType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div>

      <Card className="w-72">
        <CardHeader>
          <CardTitle className="text-xl">Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <div className="flex flex-col space-y-1 w-full">
                <Label htmlFor="minPrice">Min Price</Label>
                <Input
                  id="minPrice"
                  name="minPrice"
                  type="number"
                  value={formData.minPrice}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1 w-full">
                <Label htmlFor="maxPrice">Max Price</Label>
                <Input
                  id="maxPrice"
                  name="maxPrice"
                  type="number"
                  value={formData.maxPrice}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col space-y-1 w-full">
              <Label>Room Type</Label>
              <Select value={formData.roomType} onValueChange={handleRoomTypeChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select room type" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  {roomOptions.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-1">
              <Label htmlFor="amenities">Amenities</Label>
              <Input
                id="amenities"
                name="amenities"
                type="text"
                value={formData.amenities}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full">
              Apply Filters
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
