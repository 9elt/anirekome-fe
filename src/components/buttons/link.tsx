import { useRouter } from "next/router"
import { CSSProperties } from "react";

export default function Link(btn: {
  children: React.ReactNode;
  href?: string;
  style?: CSSProperties;
  action?: (p?: any) => any;
}) {

  const router = useRouter();

  const link = btn.href;
  const external = link ? link.slice(0, 4) === 'http' : false;

  const handleClick = (e: any) => {
    if (link) external ? window.open(link, '_blank') : router.push(link);
    if (btn.action) btn.action(e);
  }

  return (
    <span onClick={handleClick} style={{cursor: 'pointer',...btn.style}}>
      {btn.children}
    </span>
  )
}