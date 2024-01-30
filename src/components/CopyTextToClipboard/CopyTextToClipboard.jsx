import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { IoIosArrowForward } from "react-icons/io";
import "./CopyTextToClipboard.styles.css";
import { HiMiniClipboardDocumentCheck, HiMiniClipboardDocument } from "react-icons/hi2";

// eslint-disable-next-line react/prop-types
const CopyTextToClipboard = ({ text }) => {
    const [copied, setCopied] = useState(false);

    const handleCopyToClipboard = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="copy-container">
            <div className="copy-container__text">
                <div className="copy-container__text-content">
                    <IoIosArrowForward />
                    <p>{text}</p>
                </div>

                <CopyToClipboard text={text}>
                    <button onClick={handleCopyToClipboard} aria-label="Copy my email to clipboard">
                        {copied ? <HiMiniClipboardDocumentCheck /> : <HiMiniClipboardDocument />}
                    </button>
                </CopyToClipboard>
            </div>
            {copied && <span>Copied</span>}
        </div>
    );
};
export default CopyTextToClipboard;
