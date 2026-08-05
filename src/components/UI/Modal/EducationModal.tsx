import useI18n from "@/hooks/useI18n";
import "./EducationModal.scss";

interface EducationModalProps {
    title: string;
    slug: string[];
    onClose: () => void;
    onSelect: (selectedSlug: string) => void;
}

const EducationModal = ({ title, slug, onClose, onSelect }: EducationModalProps) => {
    const { t } = useI18n();

    return (
        <div className="educationModal" role="dialog" aria-modal="true">
            <div className="educationModal__panel">
                <div className="educationModal__header">
                    <h3>{title}</h3>
                    <button type="button" aria-label={t('common.close')} onClick={onClose}>
                        ×
                    </button>
                </div>

                <div className="educationModal__body">
                    <p>{t('common.selectVersion')}</p>

                    <div className="educationModal__list">
                        {slug.map((item, index) => (
                            <button
                                key={`${item}-${index}`}
                                type="button"
                                className="educationModal__item"
                                onClick={() => {
                                    onSelect(item);
                                    onClose();
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2zm3-4v-2H6v2z" />
                                </svg>
                                <span>{`${t('common.certificate')} ${index + 1}`}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationModal;