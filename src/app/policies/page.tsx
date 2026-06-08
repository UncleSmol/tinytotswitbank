const policies = [
  {
    title: "Privacy and POPIA",
    items: [
      "Personal information is collected only for school enquiries, admissions, parent communication, learner care, billing, and safety-related administration.",
      "Learner and parent information is handled confidentially and shared only with authorised staff, parents or guardians, service providers, or authorities where required by law.",
      "Parents may request access to, correction of, or deletion of their personal information where allowed by law.",
      "Personal information of children is treated with additional care and is processed only for legitimate academy purposes and with parent or guardian involvement.",
    ],
  },
  {
    title: "Child Safeguarding",
    items: [
      "The academy prioritises learner safety, respectful care, supervised routines, and age-appropriate classroom expectations.",
      "Staff are expected to act professionally, report safety concerns, and maintain suitable boundaries with learners.",
      "Arrival and pickup routines are managed to ensure children leave only with authorised adults.",
      "Any urgent medical, safety, or welfare concern is escalated to parents, guardians, and relevant authorities where appropriate.",
    ],
  },
  {
    title: "Admissions",
    items: [
      "Admission depends on age group, space availability, completed registration forms, required documents, and payment arrangements.",
      "Parents or guardians must provide accurate contact, medical, allergy, emergency, and authorised pickup information.",
      "The academy may recommend a settling-in period to help each child adjust to the school routine.",
    ],
  },
  {
    title: "Fees and Payments",
    items: [
      "Fees, payment dates, registration costs, and any additional charges are communicated to parents before enrolment.",
      "Accounts must be kept up to date unless a written arrangement has been made with the academy.",
      "Late collection, unpaid fees, or repeated breach of school terms may affect continued enrolment.",
    ],
  },
  {
    title: "Health and Medication",
    items: [
      "Parents must inform the academy about allergies, medical conditions, medication needs, and emergency care instructions.",
      "Children who are unwell may be required to remain at home to protect other learners and staff.",
      "Medication should be clearly labelled and administered only according to parent instructions and school procedure.",
    ],
  },
  {
    title: "Media and Photography",
    items: [
      "Photos or videos of learners may be used for classroom updates, school communication, or public materials only where parent or guardian consent has been given.",
      "Parents should not share images of other children without permission from the relevant parent or guardian.",
    ],
  },
  {
    title: "Website Terms",
    items: [
      "Website content is provided for general school information and may change as academy programmes, hours, fees, or policies are updated.",
      "External links, including maps and messaging services, are provided for convenience and are subject to the terms of those platforms.",
      "All website text, layout, and branding belong to Witbank Tiny Tots Academy unless otherwise stated.",
    ],
  },
  {
    title: "Cookies and Analytics",
    items: [
      "The website may use basic technical cookies or third-party embeds such as Google Maps to support normal website functionality.",
      "Users can manage cookies through their browser settings.",
    ],
  },
];

export default function PoliciesPage() {
  return (
    <main className="bg-[#fffaf0] text-[#20312d]">
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ee6f57]">
          Policies
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight text-[#18332f]">
          Academy policies and website terms.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5f746f]">
          These policies explain how Witbank Tiny Tots Academy handles learner
          care, parent communication, admissions, privacy, and website use.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {policies.map((policy) => (
            <article
              key={policy.title}
              className="rounded-lg border border-[#ead9b8] bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-black text-[#18332f]">
                {policy.title}
              </h2>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-[#5f746f]">
                {policy.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-[#ead9b8] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-[#18332f]">
            Policy updates
          </h2>
          <p className="mt-4 leading-7 text-[#5f746f]">
            These policies may be updated when the academy changes its
            procedures, services, communication methods, or legal obligations.
            Parents should contact the academy for the latest signed enrolment
            documents and formal school rules.
          </p>
        </div>
      </section>
    </main>
  );
}
