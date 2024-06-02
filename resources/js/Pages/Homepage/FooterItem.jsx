import { Link } from "@inertiajs/react";

export default function FooterItem({ url, name, className }) {
    return (
        <div>
            <Link className={className} href={url}>
                {name}
            </Link>
        </div>
    );
}
