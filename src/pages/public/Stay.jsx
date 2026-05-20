import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CinematicCard from '@/components/ui/CinematicCard';
import BookingForm from '@/components/booking/BookingForm';
import { X } from 'lucide-react';

const ROOMS = [
  {
    id: 1,
    name: "The Cedar Suite",
    description: "2 Guests • Mountain View • Fireplace",
    price: 12000,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1500&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Pine Ridge Villa",
    description: "4 Guests • Forest Deck • Private Bonfire",
    price: 24000,
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1500&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Himalayan Loft",
    description: "2 Guests • Attic Window • Star Gazing",
    price: 15000,
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1500&auto=format&fit=crop"
  }
];

export default function Stay() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="pt-32 px-gutter min-h-screen bg-background">
      <div className="max-w-container-max mx-auto mb-24">
        <h1 className="text-display-lg text-primary mb-8">Our Sanctuaries</h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mb-16">
          Find your peace in our hand-built cedar and stone cottages. Each sanctuary is designed to bring the wilderness in, while wrapping you in quiet luxury.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.map(room => (
            <CinematicCard 
              key={room.id}
              imageSrc={room.image}
              title={room.name}
              subtitle={room.description}
              price={room.price}
              className="h-[450px]"
              onClick={() => setSelectedRoom(room)}
            />
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-inverse-surface/80 backdrop-blur-md"
              onClick={() => setSelectedRoom(null)}
            />
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative z-10 w-full max-w-2xl"
            >
              <button 
                onClick={() => setSelectedRoom(null)}
                className="absolute -top-12 right-0 text-white p-2 hover:text-lantern-glow transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <BookingForm 
                roomName={selectedRoom.name} 
                price={selectedRoom.price} 
                onClose={() => setSelectedRoom(null)} 
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
