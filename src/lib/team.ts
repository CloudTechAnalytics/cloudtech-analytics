export type Person = {
  name: string;
  role: string;
  /** Path under /public, e.g. "/team/jane-doe.jpg". Leave empty to show initials. */
  photo?: string;
  bio?: string;
  linkedin?: string;
};

export const FOUNDER = {
  name: "John Adeleke",
  role: "Founder",
  photo: "/team/john-adeleke.jpg",
  photoWebp: "/team/john-adeleke.webp",
  bio: [
    "John Adeleke founded CloudTech Analytics. John is a data analyst who specializes in logistics and operations analytics: shipping and port data, vessel turnaround, cargo throughput, and the reporting that sits on top of them. That work is the background to The Manifest.",
    "John has also designed and delivered corporate data training, including SQL, Power BI, Excel and big data programmes for teams at Union Bank of Nigeria, and data analytics training for Chevron Nigeria and Prime Bisco. CloudTech's courses grew out of that teaching.",
    "John holds a B.Sc. in Biochemistry from Ladoke Akintola University of Technology.",
  ],
  focus: ["Logistics and operations analytics", "Corporate data training", "SQL, Python and Power BI"],
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/john-david-b7b5781b3/" },
    { label: "GitHub", href: "https://github.com/johndave74" },
  ],
};

/**
 * Team members shown on the About page. Add one entry per person; the section
 * shows a short "profiles coming soon" note until at least one is listed.
 */
export const TEAM: Person[] = [];
