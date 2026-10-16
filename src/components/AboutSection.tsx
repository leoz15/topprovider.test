import React from 'react';
import { MapPin, Users, Sparkles } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/agencyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#FFFFFF] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-medium uppercase tracking-widest text-[#0066FF]">
                About Us
              </span>
              <div className="h-px w-8 bg-blue-300" />
              <span className="text-xs font-medium text-[#0066FF] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 shadow-xs">
                Bangkok, Thailand
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 font-editorial">
              Engineering systems <br />
              <span className="text-[#0066FF]">
                with precision.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-md font-normal leading-relaxed">
            TOP PROVIDER SYSTEM GROUP CO., LTD. (บริษัท ท็อป โปรไวเดอร์ ซิสเท็ม กรุ๊ป จำกัด) is an enterprise technology provider specializing in software platforms, medical systems, and intelligent digital solutions.
          </p>
        </div>

        {/* Big Editorial Team Photograph & Studio Culture Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16 items-stretch">
          <div className="lg:col-span-8 rounded-[28px] sm:rounded-[36px] overflow-hidden border border-slate-200/80 bg-slate-50 shadow-sm relative group">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}assets/office-editorial.jpg`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TERVKbeU15z0voZzqxPgW5H8inBX2fjQUbjlkcfnizi4zjlkRuclWPgGeTQbi8_7U-1nym5Lrz86NSgWMrt5UXYvR7-SEHEwHA2McIMP_Of3_DPS9lFuCaS2rBh8A4659KZA1p=s1360-w1360-h1020-rw';
                }}
                alt="TOP PROVIDER SYSTEM GROUP Headquarters"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 text-white">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#0066FF]/80 backdrop-blur-md text-xs font-mono mb-2 inline-block">
                    Headquarters • Bangkok
                  </span>
                  <p className="text-lg sm:text-2xl font-medium font-editorial">
                    TOP PROVIDER SYSTEM GROUP CO., LTD.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Studio Philosophy Cards Column */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            <div className="p-7 sm:p-8 rounded-[28px] bg-slate-50 border border-slate-200/80 shadow-xs flex-1">
              <div className="w-10 h-10 rounded-2xl bg-white border border-blue-200 flex items-center justify-center text-[#0066FF] mb-4 shadow-sm">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2 font-editorial">
                High-Trust Collaboration
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Direct engagement with experienced system architects. Agile iterations, clear milestone tracking, and seamless communication across every phase.
              </p>
            </div>

            <div className="p-7 sm:p-8 rounded-[28px] bg-[#0066FF] text-white shadow-sm flex-1">
              <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center text-white mb-4">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2 font-editorial">
                Mission-Critical Reliability
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                We build scalable, secure infrastructures designed to handle mission-critical operations with 99.9% uptime and zero compromise on security.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#0066FF] font-semibold">
              Leadership & Architecture Team
            </h3>
            <span className="text-xs text-slate-500 font-medium">Bangkok Headquarters</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="group p-5 rounded-[24px] bg-slate-50 border border-slate-200/80 transition-all duration-200 hover:shadow-md hover:bg-white"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-white">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-mono flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#0066FF]" />
                    <span>{member.location}</span>
                  </div>
                </div>

                <h4 className="text-base font-medium text-slate-900 font-editorial leading-tight group-hover:text-[#0066FF] transition-colors">
                  {member.name}
                </h4>
                <p className="text-xs text-[#0066FF] font-medium mt-1 mb-2">
                  {member.role}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
