import type { Metadata } from 'next'
import Container from '@/components/Container'
import SectionTitle from '@/components/SectionTitle'
import MotionSection from '@/components/MotionSection'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contacter Shakurov Matin — email, LinkedIn, GitHub',
}

export default function ContactPage() {
  return (
    <Container className="py-16 max-w-3xl">
      <MotionSection>
        <SectionTitle
          title="Contact"
          subtitle="Vous souhaitez échanger sur mon parcours ou mes projets ? N'hésitez pas à me contacter."
          level="h1"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            { label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: '✉', external: false },
            { label: 'LinkedIn', value: 'Profil LinkedIn', href: siteConfig.linkedin, icon: '↗', external: true },
            { label: 'GitHub', value: 'BlackOurs18', href: siteConfig.github, icon: '↗', external: true },
          ].map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.external ? '_blank' : undefined}
              rel={contact.external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 bg-bg-secondary rounded-3xl p-5 hover:shadow-md transition-shadow focus-visible:outline-2 focus-visible:outline-accent-main group"
            >
              <span className="text-2xl w-10 h-10 bg-bg-primary rounded-2xl flex items-center justify-center shrink-0 text-accent-main group-hover:bg-accent-main/10 transition-colors">
                {contact.icon}
              </span>
              <div>
                <p className="text-xs text-text-main/50 uppercase tracking-wide">{contact.label}</p>
                <p className="text-text-main font-medium text-sm">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Static form (visual only — no backend) */}
        <div className="bg-bg-secondary rounded-3xl p-8">
          <h2 className="text-xl font-semibold text-accent-main mb-2">Envoyer un message</h2>
          <p className="text-sm text-text-main/50 mb-6">Formulaire visuel — utilisez l'email ci-dessus pour me contacter directement.</p>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-main/70 mb-1">Nom</label>
              <input id="name" type="text" disabled placeholder="Votre nom" className="w-full bg-bg-primary border border-text-main/10 rounded-2xl px-4 py-3 text-sm text-text-main/50 cursor-not-allowed" aria-disabled="true" />
            </div>
            <div>
              <label htmlFor="email-input" className="block text-sm font-medium text-text-main/70 mb-1">Email</label>
              <input id="email-input" type="email" disabled placeholder="votre@email.com" className="w-full bg-bg-primary border border-text-main/10 rounded-2xl px-4 py-3 text-sm text-text-main/50 cursor-not-allowed" aria-disabled="true" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-main/70 mb-1">Message</label>
              <textarea id="message" disabled rows={4} placeholder="Votre message..." className="w-full bg-bg-primary border border-text-main/10 rounded-2xl px-4 py-3 text-sm text-text-main/50 cursor-not-allowed resize-none" aria-disabled="true" />
            </div>
            <p className="text-xs text-text-main/40 italic">Ce formulaire est désactivé. Utilisez l'email ou LinkedIn pour me contacter.</p>
          </div>
        </div>
      </MotionSection>
    </Container>
  )
}
