import type { Course } from "@/types/Education";
import { useEffect, useState } from "react";
import "./CertificationCard.scss";

interface CertificationCardProps extends Course {
    onOpen: () => void;
}

const CertificationCard = ({ institution, name, content, endDate, slug, onOpen }: CertificationCardProps) => {
    const [isClickable, setIsClickable] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const checkAvailability = async () => {
            const checks = await Promise.all(
                slug.map(async (item) => {
                    try {
                        const response = await fetch(`/education/${item}.pdf`, { method: "HEAD" });
                        return response.ok;
                    } catch {
                        return false;
                    }
                })
            );

            if (isMounted) {
                setIsClickable(checks.some(Boolean));
            }
        };

        void checkAvailability();

        return () => {
            isMounted = false;
        };
    }, [slug]);

    return (
        <button
            type="button"
            className={`certificationCard ${isClickable ? "" : "certificationCard--disabled"}`}
            onClick={isClickable ? onOpen : undefined}
            disabled={!isClickable}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="currentColor" d="M20 2H4v2l5.81 4.36a7.004 7.004 0 0 0-4.46 8.84a6.996 6.996 0 0 0 8.84 4.46a7 7 0 0 0 0-13.3L20 4zm-5.06 17.5L12 17.78L9.06 19.5l.78-3.33l-2.59-2.24l3.41-.29L12 10.5l1.34 3.14l3.41.29l-2.59 2.24z" />
            </svg>

            <div className="certificationCard__info1">
                <h4>{name}</h4>
                <p>{content}</p>
            </div>

            <div className="certificationCard__info2">
                <p>{institution}</p>
                <span>{endDate}</span>
            </div>
        </button>
    );
};

export default CertificationCard;