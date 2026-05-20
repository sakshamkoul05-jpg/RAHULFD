import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

export default function Footer() {
  return (
    <footer className="bg-surface-container border-t border-outline-variant/30 py-16 px-gutter">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-display-lg-mobile text-primary mb-4">Vedara</h2>
          <p className="text-body-md text-on-surface-variant max-w-sm">
            A sanctuary of wisdom, wilderness, and quiet luxury. Discover the slow living philosophy of the Himalayas.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-label-caps text-on-surface mb-6 uppercase tracking-widest">Explore</h4>
          <ul className="space-y-4">
            <li><Link to="/stay" className="text-on-surface-variant hover:text-lantern-glow transition-colors">Our Cottages</Link></li>
            <li><Link to="/cafe" className="text-on-surface-variant hover:text-lantern-glow transition-colors">The Café</Link></li>
            <li><Link to="/experiences" className="text-on-surface-variant hover:text-lantern-glow transition-colors">Experiences</Link></li>
            <li><Link to="/gallery" className="text-on-surface-variant hover:text-lantern-glow transition-colors">Gallery</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-label-caps text-on-surface mb-6 uppercase tracking-widest">Contact</h4>
          <ul className="space-y-4 text-on-surface-variant text-sm">
            <li>Kanyal Road, Manali</li>
            <li>Himachal Pradesh, India</li>
            <li className="pt-4">hello@vedararetreat.com</li>
            <li>+91 98765 43210</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-container-max mx-auto mt-16 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center text-sm text-on-surface-variant">
        <p>&copy; {new Date().getFullYear()} Vedara Himalayan Retreat. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/policies" className="hover:text-on-surface">Privacy Policy</Link>
          <Link to="/policies" className="hover:text-on-surface">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
