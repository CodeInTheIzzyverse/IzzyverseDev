import useI18n from "@/hooks/useI18n";
import "./PDFViewer.scss";

interface PDFViewerProps {
    slug: string;
    onClose: () => void;
}

const PDFViewer = ({ slug, onClose }: PDFViewerProps) => {
    const { t } = useI18n();

    return (
        <div className="pdfViewer" role="dialog" aria-modal="true" onClick={onClose}>
            <div className="pdfViewer__panel" onClick={(event) => event.stopPropagation()}>
                <div className="pdfViewer__header">
                    <h3>{t('common.certificate')}</h3>
                    <button type="button" aria-label={t('common.close')} onClick={onClose}>
                        ×
                    </button>
                </div>

                <iframe
                    src={`/education/${slug}.pdf`}
                    title="PDF Viewer"
                    width="100%"
                    height="600px"
                ></iframe>
            </div>
        </div>
    );
};

export default PDFViewer;