import { useTranslation } from 'react-i18next';
import './Switch.scss';

interface SwitchProps {
    className?: string;
    option1?: string;
    option2?: string;
}

const Switch = ({ className = "", option1 = "🇺🇸", option2 = "🇨🇴", ...props }: SwitchProps) => {
    const { i18n } = useTranslation();
    const activeLang = i18n.language?.startsWith('es') ? 'es' : 'en';

    const changeLang = (lang: 'en' | 'es') => {
        void i18n.changeLanguage(lang);
    };

    const isEnglishActive = activeLang === 'en';

    return (
        <div className={`switch ${isEnglishActive ? 'switch--en' : 'switch--es'} ${className}`.trim()} {...props}>
            <span className="switch__pill" aria-hidden="true" />

            <button
                type="button"
                className={`switch__button ${isEnglishActive ? 'switch__button--active' : ''}`}
                onClick={() => changeLang('en')}
                aria-label="Switch to English"
                aria-pressed={isEnglishActive}
            >
                <span>{option1}</span>
            </button>

            <button
                type="button"
                className={`switch__button ${!isEnglishActive ? 'switch__button--active' : ''}`}
                onClick={() => changeLang('es')}
                aria-label="Cambiar a español"
                aria-pressed={!isEnglishActive}
            >
                <span>{option2}</span>
            </button>
        </div>
    );
};

export default Switch;