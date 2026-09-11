import Image from "next/image";
import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="logo" aria-label="Tennis Management Limburg, naar home">
      <Image
        src={inverse ? "/images/tml/logo-officieel.svg" : "/images/tml/logo-officieel-donker.svg"}
        alt=""
        width={709}
        height={326}
        priority
      />
    </Link>
  );
}
