import { Link } from "@inertiajs/react";

export default function FooterItem({ url, name }) {
    return (
        <div>
            <Link href={url}>{name}</Link>
        </div>
    );
}
