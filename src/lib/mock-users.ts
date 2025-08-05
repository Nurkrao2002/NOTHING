export type MockUser = {
  uid: string;
  email: string;
  password?: string; // Password is only for login check, not stored in session
  role: string;
  company: {
    id: string;
    name: string;
    slug: string;
  };
};

export const mockUsers: MockUser[] = [
  // srisys
  {
    uid: "srisys-ceo",
    email: "ceo@srisys.com",
    password: "password",
    role: "CEO",
    company: { id: "srisys", name: "srisys", slug: "srisys" },
  },
  {
    uid: "srisys-admin",
    email: "admin@srisys.com",
    password: "password",
    role: "Company Admin",
    company: { id: "srisys", name: "srisys", slug: "srisys" },
  },
  {
    uid: "srisys-finance",
    email: "finance@srisys.com",
    password: "password",
    role: "Finance Team",
    company: { id: "srisys", name: "srisys", slug: "srisys" },
  },
  {
    uid: "srisys-sales",
    email: "sales@srisys.com",
    password: "password",
    role: "Sales & Marketing",
    company: { id: "srisys", name: "srisys", slug: "srisys" },
  },
  {
    uid: "srisys-ops",
    email: "ops@srisys.com",
    password: "password",
    role: "Operations Team",
    company: { id: "srisys", name: "srisys", slug: "srisys" },
  },
  // vedic
  {
    uid: "vedic-ceo",
    email: "ceo@vedic.com",
    password: "password",
    role: "CEO",
    company: { id: "vedic", name: "vedic", slug: "vedic" },
  },
  {
    uid: "vedic-admin",
    email: "admin@vedic.com",
    password: "password",
    role: "Company Admin",
    company: { id: "vedic", name: "vedic", slug: "vedic" },
  },
  {
    uid: "vedic-finance",
    email: "finance@vedic.com",
    password: "password",
    role: "Finance Team",
    company: { id: "vedic", name: "vedic", slug: "vedic" },
  },
  {
    uid: "vedic-sales",
    email: "sales@vedic.com",
    password: "password",
    role: "Sales & Marketing",
    company: { id: "vedic", name: "vedic", slug: "vedic" },
  },
  {
    uid: "vedic-ops",
    email: "ops@vedic.com",
    password: "password",
    role: "Operations Team",
    company: { id: "vedic", name: "vedic", slug: "vedic" },
  },
  // Pigeon-Tech
  {
    uid: "pigeon-tech-ceo",
    email: "ceo@pigeon-tech.com",
    password: "password",
    role: "CEO",
    company: { id: "pigeon-tech", name: "Pigeon-Tech", slug: "pigeon-tech" },
  },
  {
    uid: "pigeon-tech-admin",
    email: "admin@pigeon-tech.com",
    password: "password",
    role: "Company Admin",
    company: { id: "pigeon-tech", name: "Pigeon-Tech", slug: "pigeon-tech" },
  },
  {
    uid: "pigeon-tech-finance",
    email: "finance@pigeon-tech.com",
    password: "password",
    role: "Finance Team",
    company: { id: "pigeon-tech", name: "Pigeon-Tech", slug: "pigeon-tech" },
  },
  {
    uid: "pigeon-tech-sales",
    email: "sales@pigeon-tech.com",
    password: "password",
    role: "Sales & Marketing",
    company: { id: "pigeon-tech", name: "Pigeon-Tech", slug: "pigeon-tech" },
  },
  {
    uid: "pigeon-tech-ops",
    email: "ops@pigeon-tech.com",
    password: "password",
    role: "Operations Team",
    company: { id: "pigeon-tech", name: "Pigeon-Tech", slug: "pigeon-tech" },
  },
  // Platform Admins
  {
    uid: "super-admin",
    email: "superadmin@platform.com",
    password: "password",
    role: "Super Admin",
    company: { id: "platform", name: "Platform", slug: "platform" },
  },
  {
    uid: "platform-manager",
    email: "manager@platform.com",
    password: "password",
    role: "Platform Manager",
    company: { id: "platform", name: "Platform", slug: "platform" },
  },
];
