import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const bookingSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  guests: z.number().min(1, "At least 1 guest required").max(6, "Maximum 6 guests allowed"),
  checkIn: z.string().min(1, "Check-in date is required"),
  checkOut: z.string().min(1, "Check-out date is required"),
  specialRequests: z.string().optional(),
});

export default function BookingForm({ roomName, price, onClose }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: { guests: 2 }
  });

  const onSubmit = (data) => {
    console.log("Booking hold data:", data);
    // Realtime Booking Flow Integration goes here
    alert("Booking hold created successfully. (Placeholder for Razorpay integration)");
  };

  return (
    <div className="glass-panel p-8 rounded-xl relative max-w-2xl w-full mx-auto">
      <h3 className="text-headline-md text-primary mb-2">Reserve {roomName}</h3>
      <p className="text-body-md text-on-surface-variant mb-8">
        Enter your details to hold this sanctuary. Pricing starting at ₹{price}/night.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input 
            label="Full Name" 
            {...register('fullName')} 
            error={errors.fullName?.message} 
          />
          <Input 
            label="Email" 
            type="email" 
            {...register('email')} 
            error={errors.email?.message} 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input 
            label="Phone Number" 
            {...register('phone')} 
            error={errors.phone?.message} 
          />
          <div className="flex flex-col w-full">
            <label className="mb-2 text-label-caps text-on-surface-variant uppercase tracking-widest">
              Number of Guests
            </label>
            <select 
              className="w-full bg-surface-dim border border-outline-variant/50 rounded-md px-4 py-3 text-on-surface shadow-inner-etched transition-all duration-300 outline-none focus:border-transparent focus:ring-1 focus:ring-lantern-glow"
              {...register('guests', { valueAsNumber: true })}
            >
              {[1,2,3,4,5,6].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
            {errors.guests && <span className="mt-1 text-sm text-error">{errors.guests.message}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input 
            label="Check-In" 
            type="date" 
            {...register('checkIn')} 
            error={errors.checkIn?.message} 
          />
          <Input 
            label="Check-Out" 
            type="date" 
            {...register('checkOut')} 
            error={errors.checkOut?.message} 
          />
        </div>

        <div className="border-t border-outline-variant/30 pt-6 mt-6">
          <div className="flex justify-between text-on-surface-variant mb-2">
            <span>Subtotal</span>
            <span>₹{price}</span>
          </div>
          <div className="flex justify-between text-on-surface-variant mb-2">
            <span>Taxes & Fees</span>
            <span>₹{(price * 0.18).toFixed(0)}</span>
          </div>
          <div className="flex justify-between text-lg font-display text-primary mt-4">
            <span>Total Payable</span>
            <span>₹{(price * 1.18).toFixed(0)}</span>
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-6">
          {onClose && <Button variant="ghost" onClick={onClose} type="button">Cancel</Button>}
          <Button type="submit">Confirm & Pay</Button>
        </div>
      </form>
    </div>
  );
}
