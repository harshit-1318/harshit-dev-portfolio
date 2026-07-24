"use client";

import { ContactAvailability } from "./contact-availability";
import { ContactDetailsCards } from "./contact-details-cards";
import { ContactSocialLinks } from "./contact-social-links";

export function ContactInfo() {
  return (
    <div className="space-y-2.5 flex flex-col justify-between h-full">
      <div className="space-y-2.5">
        <ContactAvailability />
        <ContactDetailsCards />
      </div>
      <ContactSocialLinks />
    </div>
  );
}
