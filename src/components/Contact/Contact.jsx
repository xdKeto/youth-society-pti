import { motion } from 'framer-motion';
import ScrollReveal from '../shared/ScrollReveal';
import { fadeInUp, scaleIn, slideInLeft, slideInRight } from '../../utils/motionVariants';
import './Contact.css';

import instagramPhone from '../../assets/illustrations/instagram.png';
import contactInstagramGif from '../../assets/illustrations/contact_instagram.gif';
import qrWhatsapp from '../../assets/illustrations/qr_whatsapp.png';
import contactWhatsapp from '../../assets/illustrations/contact_whatsapp.png';

export default function Contact() {
  return (
    <>
      {/* ── Instagram Section ── */}
      <section
        className="contact-section relative bg-[var(--color-forest-green)] py-16 px-8 max-sm:py-10 max-sm:px-4 overflow-hidden"
        id="contact-ig"
      >
        <div className="relative z-1 max-w-[1000px] mx-auto flex flex-col items-center">
          {/* Heading */}
          <ScrollReveal variants={fadeInUp}>
            <h2 className="font-[family-name:var(--font-display)] text-[var(--color-yellow)] text-[clamp(1.6rem,5vw,2.6rem)] text-center mb-8 tracking-[0.05em]">
              FOR MORE INFORMATION!
            </h2>
          </ScrollReveal>

          {/* Instagram content */}
          <div className="flex flex-col items-center gap-8">
            {/* Phone mockup with IG screenshot */}
            <motion.div
              className="relative flex justify-center will-change-transform"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src={instagramPhone}
                alt="Youth Society Instagram profile"
                className="w-[clamp(220px,40vw,340px)] h-auto object-contain drop-shadow-2xl"
                loading="lazy"
              />
            </motion.div>

            {/* CTA text + button */}
            <ScrollReveal variants={fadeInUp}>
              <div className="flex flex-col items-center gap-4">
                {/* <p className="font-[family-name:var(--font-display)] text-[var(--color-cream)] text-[clamp(1rem,3vw,1.4rem)] text-center tracking-[0.06em]">
                  CHECK OUR INSTAGRAM
                </p> */}

                <a
                  href="https://www.instagram.com/youthsociety_gkipti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.08] active:scale-95 overflow-hidden rounded-full"
                  aria-label="Follow us on Instagram"
                >
                  <img
                    src={contactInstagramGif}
                    alt="@youthsociety_gkipti"
                    className="h-[220px] w-auto object-contain drop-shadow-lg -my-[36%]"
                  />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── WhatsApp Section ── */}
      <section
        className="relative bg-[var(--color-tan)] py-16 px-8 max-sm:py-10 max-sm:px-4 overflow-hidden"
        id="contact-wa"
      >
        <div className="relative z-1 max-w-[1000px] mx-auto flex flex-col items-center">

          <div className="flex flex-col md:flex-row items-center justify-center  w-full mb-12">
            {/* Left side: Text */}
            <ScrollReveal variants={slideInLeft}>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <p className="font-[family-name:var(--font-display)] text-[var(--color-brown)] text-[clamp(1.4rem,4vw,2.2rem)] leading-[1.3] tracking-[0.05em]">
                  YOUR COMMUNITY<br />IS WAITING
                </p>
                {/* Smiley face to be added here later */}
              </div>
            </ScrollReveal>

            {/* Right side: QR Graphic */}
            <ScrollReveal variants={slideInRight}>
              <img
                src={qrWhatsapp}
                alt="WhatsApp QR Code"
                className="w-[clamp(280px,45vw,380px)] h-auto object-contain drop-shadow-xl"
                loading="lazy"
              />
            </ScrollReveal>
          </div>

          {/* Bottom CTA */}
          <ScrollReveal variants={fadeInUp}>
            <a
              href="https://chat.whatsapp.com/BEDW9VIsJRM5KvBnziNQ3M?s=qt&p=a&mlu=2"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.08] active:scale-95"
              aria-label="Join our WhatsApp Group"
            >
              <img
                src={contactWhatsapp}
                alt="KLIK THIS!"
                className="h-[80px] w-auto object-contain drop-shadow-md animate-wiggle-vibrate"
              />
            </a>
          </ScrollReveal>

        </div>
      </section>
    </>
  );
}
