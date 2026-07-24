# 🛡️ Security Policy & Threat Model

## Project Name: Harshit Developer Portfolio
**Security Level:** Production Grade  
**Auth Strategy:** NextAuth.js v5 JWT + Bcrypt Password Encryption  
**Input Validation:** Zod Schema Validation (Client & Server)  

---

## 1. Security Overview

The **Harshit Developer Portfolio** employs a multi-layer security model to protect user data, admin credentials, environment secrets, and backend serverless endpoints.

---

## 2. Authentication & Authorization Controls

- **NextAuth.js v5:** Uses JSON Web Token (JWT) session strategy with encrypted cookies.
- **Password Encryption:** Admin passwords are encrypted using `bcryptjs` with high salt rounds (12). Plaintext passwords are never logged or stored.
- **Route Guarding:** Admin routes (`/admin/*`) and sensitive management API routes (`/api/messages`, `/api/dashboard`) are guarded by NextAuth middleware.

---

## 3. Threat Mitigation Matrix

| Vulnerability Threat | Mitigation Mechanism | Implementation |
|---|---|---|
| **NoSQL Injection** | Mongoose ODM & Zod Type Casting | All incoming payloads strictly parsed via Zod schemas before database queries. |
| **Cross-Site Scripting (XSS)** | React Automatic HTML Escaping | React 19 automatically escapes rendered strings; no raw `dangerouslySetInnerHTML` on untrusted inputs. |
| **CSRF Attacks** | NextAuth Anti-CSRF Tokens | NextAuth validates HTTP POST/PUT/DELETE requests with encrypted CSRF tokens. |
| **Credential Leakage** | `.env.local` Isolation | Zero hardcoded secrets in source code; `.gitignore` strictly blocks `.env` commits. |
| **Connection Exhaustion** | Global Cached DB Connection | Mongoose connection singleton (`src/lib/db.ts`) prevents connection pool leaks in serverless functions. |

---

## 4. Reporting a Security Vulnerability

If you discover a potential security vulnerability within this repository:

1. **Do NOT open a public GitHub Issue.**
2. Send a direct email to **[kumarharshit370@gmail.com](mailto:kumarharshit370@gmail.com)** with the subject line `[SECURITY VULNERABILITY REPORT]`.
3. Provide steps to reproduce the issue and allow reasonable time for remediation before disclosure.
