import Link from "next/link";
import { linksNav } from "./LinksNav";
import "./MarqueeLinksNav.scss";

export default function MarqueeLinksNav() {
       return (
              <div className="px-10 mt-1">
              <ul dir="rtl" className="marqueeLinksNav | flex items-center justify-start gap-10 py-5">
                     {linksNav.map((link) => (
                            <li key={link.id}><Link href={link.url}>{link.name}</Link></li>
                     ))}
              </ul>
              </div>
       )
}
