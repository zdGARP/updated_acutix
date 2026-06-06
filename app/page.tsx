'use client';
import Image from 'next/image';
import WhyAcutix from '@/components/WhyAcutix';
import WhoWeAre from '@/components/WhoWeAre';
import WhatWeDo from '@/components/WhatWeDo';
import FAQSection from '@/components/FAQSection'; 

export default function Home() {
    const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Acutix Soft provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Acutix Soft provides software development, web development, and digital solutions tailored for startups and small businesses."
        }
      },
      {
        "@type": "Question",
        "name": "Who should use Acutix Soft services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our services are ideal for startups, entrepreneurs, and small businesses looking to build scalable digital products."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies are used by Acutix Soft?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use modern technologies including web frameworks, AI tools, and cloud platforms to build efficient and scalable applications."
        }
      },
      {
        "@type": "Question",
        "name": "Does Acutix Soft offer custom software development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Acutix Soft specializes in custom software solutions designed to meet specific business needs."
        }
      }
    ]
  };
  return (
    <main>
      <div className="relative h-[200vh]">
        <section className="sticky top-0 flex h-screen flex-col items-center justify-center bg-[#F8F3ED] dark:bg-[#181c24] text-center">
          <h2 className="text-4xl font-bold tracking-widest md:text-6xl text-[#323b42] dark:text-white">
            TOGETHER WITH US
          </h2>
          <p className="mt-4 text-lg font-semibold tracking-widest text-[#323b42] dark:text-gray-200">
            BEST SERVICES FROM STUDENT EXPERTS
          </p>
          <div className="mt-0">
            <Image
              src="/Together-with-us.jpg"
              alt="Together with us"
              width={1800}
              height={400}
              className="object-contain rounded-xl shadow-xl dark:shadow-blue-900/30"
            />
          </div>
        </section>
        <section className="absolute top-0 z-10 flex h-screen w-full flex-col items-center justify-center bg-white dark:bg-[#23272b]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero.jpg"
              alt="Hero Background"
              fill
              priority
              className="object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-black/40 dark:bg-black/70" />
          </div>
          <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center animate-fadeIn">
            <span className="text-sm md:text-4xl text-white font-semibold tracking-wide mb-4 drop-shadow-lg">
              EMPOWERING YOUR DIGITAL FUTURE
            </span>
            <Image src="/logo.png" alt="Acutix Logo" width={140} height={140} priority className="" />
            <p className="mt-2 text-lg md:text-xl text-white/90 mb-8">
              Transforming and Empowering Small Businesses through Digitalization
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-lg bg-blue-600 dark:bg-blue-500 text-white font-bold text-lg shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition">
              Get Started
            </a>
          </div>
        </section>
      </div>
      <div className="relative z-20 bg-white dark:bg-[#181c24]">
          <WhyAcutix />
          <WhoWeAre />
          <WhatWeDo />
          <FAQSection />  
        </div>
      </main>
    )
}
                Yes, Acutix Soft specializes in custom software solutions designed to meet specific business needs.
              </p>
            </div>

            <div className="bg-[#F8F3ED] dark:bg-[#23272b] p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-[#323b42] dark:text-white">What technologies are used by Acutix Soft?</h3>
              <p className="text-[#323b42] dark:text-gray-300">
                We use modern technologies including web frameworks, AI tools, and cloud platforms to build efficient and scalable applications.
              </p>
            </div>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </section>
    </main>
  );
}
>>>>>>> origin/Divyanand
