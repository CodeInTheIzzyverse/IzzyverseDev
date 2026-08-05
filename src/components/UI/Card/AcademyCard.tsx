import type { Core } from "@/types/Education";
import { useEffect, useState } from "react";
import "./AcademyCard.scss";

interface AcademyCardProps extends Core {
    onOpen: () => void;
}

const AcademyCard = ({ institution, degree, level, startDate, endDate, slug, onOpen }: AcademyCardProps) => {
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
            className={`academyCard ${isClickable ? "" : "academyCard--disabled"}`}
            onClick={isClickable ? onOpen : undefined}
            disabled={!isClickable}
        >
            <div className="academyCard__degree">
                <h3>{institution}</h3>
                <span>{degree}</span>
            </div>

            <div className="academyCard__dates">
                <div className="academyCard__range">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 16H5V9h14zm0-12H5V5h14z" />
                    </svg>
                    <p>{`${startDate} - ${endDate}`}</p>
                </div>
                <span className="academyCard__level">{level}</span>
            </div>
        </button>
    );
};

export default AcademyCard;