import './ClipboardFeedback.scss';

interface ClipboardFeedbackProps {
    visible: boolean;
    message: string;
}

const ClipboardFeedback = ({ visible, message }: ClipboardFeedbackProps) => {
    if (!visible) return null;

    return (
        <div className="clipboardFeedback" role="status" aria-live="polite">
            <span className="clipboardFeedback__icon">✓</span>
            <span>{message}</span>
        </div>
    );
};

export default ClipboardFeedback;
