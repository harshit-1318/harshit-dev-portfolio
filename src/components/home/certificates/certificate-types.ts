import type { ICertificate } from "@/types";

export type CertificateItem = ICertificate;

export interface CertificateModalProps {
  cert: CertificateItem | null;
  isOpen: boolean;
  onClose: () => void;
}
