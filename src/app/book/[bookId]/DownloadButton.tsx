'use client'
const DownloadButton = ({fileLink}: {fileLink: string}) => {

    const handleDownload = () => {
        window.open(fileLink, '_blank');
    }

    return (
        <button 
        onClick={handleDownload}   
        className="bg-primary-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-all hover:bg-primary-600 active:bg-primary-700" 
        >
            
            Download the Book 
        </button>
    )
}

export default DownloadButton;