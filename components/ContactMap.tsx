"use client";

import { MapPin } from "lucide-react";
import Reveal from "./Reveal";

/**
 * Office location shown on the contact map. Update this one line (and
 * MAP_EMBED_URL below) when the real address is finalized.
 */
const LOCATION = {
  label: "Deskgoo HQ, MG Road, Bengaluru, India",
  query: "MG Road, Bengaluru, Karnataka, India",
};

const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  LOCATION.query
)}&z=15&ie=UTF8&iwloc=&output=embed`;

const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  LOCATION.query
)}`;

export default function ContactMap() {
  return (
    <Reveal>
      <div className="gradient-border relative mt-16 overflow-hidden rounded-3xl border border-line bg-panel">
        <div className="flex flex-wrap items-center justify-between gap-4 px-8 pt-8 pb-6 md:px-10">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-iris/15 text-mist">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs tracking-[0.25em] text-fog/60 uppercase">Find us</p>
              <p className="mt-0.5 font-display text-lg font-semibold text-mist">
                {LOCATION.label}
              </p>
            </div>
          </div>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-fog transition-colors hover:border-iris/50 hover:text-mist"
          >
            Get directions
          </a>
        </div>
        <iframe
          src={MAP_EMBED_URL}
          title={`Map — ${LOCATION.label}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[380px] w-full border-0 grayscale-[0.35] transition-all duration-700 hover:grayscale-0 md:h-[440px]"
          allowFullScreen
        />
      </div>
    </Reveal>
  );
}
