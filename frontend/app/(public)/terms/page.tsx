import Card from '@/components/Card'
import Link from 'next/link'
import React from 'react'

const Terms = () => {
  return (
    <div className='flex flex-col gap-6 p-2 md:p-4 min-h-screen text-[#333] '>
      <h1 className='font-bold text-4xl mb-2'>Terms of Service</h1>
      <p className='text-sm text-slate-500 -mt-4 mb-4'>Last updated: August 27, 2026</p>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>1. Overview</h2>
        <p className='text-base leading-relaxed'>
          Welcome to <strong>AI Resume Intelligence</strong>. Our platform leverages advanced artificial intelligence models to analyze, optimize, extract insights from, and generate professional resumes and career documents. These Terms of Service ("Terms") govern your access to and use of our website, applications, and core services.
        </p>
      </Card>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>2. Acceptance of Terms</h2>
        <p className='text-base leading-relaxed'>
          By creating an account, uploading a resume, or otherwise using our platform, you agree to be bound by these Terms and our Privacy Policy. You confirm that you are at least 18 years old and possess the legal capacity to form a binding contract. If you disagree with any part of these terms, you must immediately stop using our services.
        </p>
      </Card>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>3. User Accounts</h2>
        <p className='text-base leading-relaxed'>
          To access certain features, you must register for an account. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete information during registration and to update it immediately if changes occur.
        </p>
      </Card>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>4. Use of the Service</h2>
        <p className='text-base leading-relaxed'>
          We grant you a limited, non-exclusive, non-transferable, and revocable licence to use our service for personal or professional career development. You agree not to misuse the service, including but not limited to: scraping data, introducing malicious code, attempting to bypass platform limitations, or using the platform to generate fraudulent application materials.
        </p>
      </Card>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>5. AI-Powered Features</h2>
        <p className='text-base leading-relaxed'>
          Our platform utilizes artificial intelligence to provide automated suggestions, scoring, and text generation. You acknowledge that AI-generated outputs are highly dependent on user inputs and probabilistic models. We do not guarantee the absolute accuracy, completeness, or competitive success of any AI-generated resume optimizations or recommendations.
        </p>
      </Card>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>6. Resume & User Content</h2>
        <p className='text-base leading-relaxed'>
          You retain all ownership rights to the resumes, cover letters, and text profiles you upload or input into the platform. By submitting content, you grant us a worldwide, royalty-free licence to process, host, parse, and analyze your content solely to deliver, train, and improve our core AI intelligence services for your benefit.
        </p>
      </Card>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>7. Intellectual Property</h2>
        <p className='text-base leading-relaxed'>
          All platform architecture, design elements, source code, visual interfaces, proprietary algorithms, and branding are the exclusive intellectual property of AI Resume Intelligence. You may not copy, modify, distribute, or reverse-engineer any portion of our platform without prior written authorization.
        </p>
      </Card>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>8. Data Privacy</h2>
        <p className='text-base leading-relaxed'>
          Your privacy is important to us. We handle your personal details, career history, and contact metrics in strict accordance with modern data protection regulations. Please review our comprehensive Privacy Policy to understand how we collect, store, isolate, and safely process your sensitive career information.
        </p>
      </Card>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>9. Disclaimer of Warranties</h2>
        <p className='text-base leading-relaxed uppercase text-xs tracking-wider font-medium text-slate-600 dark:text-slate-400'>
          The service is provided on an "as-is" and "as-available" basis. We expressly disclaim all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We make no warranty that the platform will secure you employment or pass automatic applicant tracking systems (ATS).
        </p>
      </Card>

      <Card className="flex flex-col gap-2 p-4">
        <h2 className='md:text-2xl text-xl font-semibold  '>10. Contact Us</h2>
        <p className='text-base leading-relaxed'>
          If you have any questions or legal concerns regarding these Terms, please reach out directly to the{' '}
          <Link href={"mailto:developer.jrts@gmail.com"} className='font-semibold text-blue-500 hover:text-blue-600 transition-colors underline decoration-2 underline-offset-4'>
            Developer
          </Link>
          .
        </p>
      </Card>
    </div>
  )
}

export default Terms
