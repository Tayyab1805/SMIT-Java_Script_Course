// PDF Generator for Python Business Analytics Course
// Text-based PDF generation using jsPDF

console.log('PDF Generator loaded');

// Check if jsPDF is available
if (typeof jspdf === 'undefined') {
    console.error('jsPDF library not loaded!');
}

// PDF Configuration
const PDF_CONFIG = {
    pageSize: 'a4',
    orientation: 'portrait',
    unit: 'mm',
    margins: {
        top: 20,
        right: 15,
        bottom: 20,
        left: 15
    },
    colors: {
        primary: [55, 118, 171],    // Python blue
        secondary: [255, 211, 67],  // Python yellow
        darkBlue: [43, 91, 132],    // Dark blue
        text: [26, 26, 26],         // Dark text
        lightText: [102, 102, 102], // Light text
        red: [211, 47, 47]          // Red for YouTube
    }
};

// Show loading overlay
function showPDFLoading(show) {
    let loading = document.getElementById('pdfLoading');
    
    if (!loading && show) {
        loading = document.createElement('div');
        loading.id = 'pdfLoading';
        loading.innerHTML = `
            <div class="pdf-loading">
                <div class="pdf-loading-content">
                    <i class="fas fa-spinner fa-spin"></i>
                    <h3>Generating PDF</h3>
                    <p>Please wait while we prepare your document...</p>
                    <div class="pdf-progress">
                        <div class="pdf-progress-bar"></div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(loading);
        
        // Add styles
        const styles = document.createElement('style');
        styles.textContent = `
            .pdf-loading {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 999999;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            .pdf-loading-content {
                background: white;
                padding: 40px;
                border-radius: 10px;
                text-align: center;
                max-width: 400px;
                width: 90%;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            }
            .pdf-loading-content i {
                font-size: 48px;
                color: #3776ab;
                margin-bottom: 20px;
            }
            .pdf-loading-content h3 {
                color: #333;
                margin-bottom: 10px;
                font-size: 20px;
            }
            .pdf-loading-content p {
                color: #666;
                margin-bottom: 20px;
                font-size: 14px;
            }
            .pdf-progress {
                height: 4px;
                background: #eee;
                border-radius: 2px;
                overflow: hidden;
            }
            .pdf-progress-bar {
                height: 100%;
                background: #3776ab;
                width: 0%;
                animation: pdfProgress 2s infinite;
            }
            @keyframes pdfProgress {
                0% { width: 0%; margin-left: 0%; }
                50% { width: 50%; margin-left: 25%; }
                100% { width: 0%; margin-left: 100%; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    if (loading) {
        loading.style.display = show ? 'flex' : 'none';
        if (!show) {
            setTimeout(() => {
                if (loading && loading.parentNode) {
                    loading.parentNode.removeChild(loading);
                }
            }, 500);
        }
    }
}

// Convert HTML to plain text for PDF
function htmlToText(html) {
    // Create temporary element
    const temp = document.createElement('div');
    temp.innerHTML = html;
    
    // Convert code blocks
    const codeBlocks = temp.querySelectorAll('code, pre');
    codeBlocks.forEach(block => {
        block.innerHTML = '```\n' + block.textContent + '\n```';
    });
    
    // Get text content
    let text = temp.textContent || temp.innerText || '';
    
    // Clean up
    text = text
        .replace(/\n\s*\n\s*\n/g, '\n\n')
        .trim();
    
    return text;
}

// Generate PDF for all lectures
async function generateAllLecturesPDF() {
    try {
        showPDFLoading(true);
        
        // Check if jsPDF is available
        if (typeof jspdf === 'undefined') {
            throw new Error('jsPDF library not loaded. Please refresh the page.');
        }
        
        const { jsPDF } = window.jspdf;
        
        // Sort videos by lecture number
        const sortedVideos = [...videoData].sort((a, b) => {
            const numA = parseInt(a.number.split(' ')[1]);
            const numB = parseInt(b.number.split(' ')[1]);
            return numA - numB;
        });
        
        // Create PDF document
        const doc = new jsPDF({
            orientation: PDF_CONFIG.orientation,
            unit: PDF_CONFIG.unit,
            format: PDF_CONFIG.pageSize
        });
        
        // Add title page
        addTitlePage(doc, sortedVideos);
        
        // Add table of contents
        doc.addPage();
        addTableOfContents(doc, sortedVideos);
        
        // Add each lecture
        for (let i = 0; i < sortedVideos.length; i++) {
            if (i > 0) {
                doc.addPage();
            }
            await addLectureToPDF(doc, sortedVideos[i], i + 1);
        }
        
        // Add page numbers
        addPageNumbers(doc);
        
        // Save PDF
        const date = new Date().toISOString().split('T')[0];
        doc.save(`SMIT_javaScript_Course-${date}.pdf`);
        
        showPDFLoading(false);
        
    } catch (error) {
        console.error('PDF generation error:', error);
        showPDFLoading(false);
        alert('Error generating PDF: ' + error.message);
    }
}

// Generate PDF for single lecture
async function generateLecturePDF(video) {
    try {
        if (!video) {
            throw new Error('No video data provided');
        }
        
        showPDFLoading(true);
        
        // Check if jsPDF is available
        if (typeof jspdf === 'undefined') {
            throw new Error('jsPDF library not loaded. Please refresh the page.');
        }
        
        const { jsPDF } = window.jspdf;
        
        // Create PDF document
        const doc = new jsPDF({
            orientation: PDF_CONFIG.orientation,
            unit: PDF_CONFIG.unit,
            format: PDF_CONFIG.pageSize
        });
        
        // Add lecture content
        await addLectureToPDF(doc, video, 1, true);
        
        // Add page numbers
        addPageNumbers(doc);
        
        // Save PDF
        const filename = `${video.number.replace(/\s+/g, '-')}-${video.title.substring(0, 30).replace(/[^a-z0-9]/gi, '-').toLowerCase()}.pdf`;
        doc.save(filename);
        
        showPDFLoading(false);
        
    } catch (error) {
        console.error('PDF generation error:', error);
        showPDFLoading(false);
        alert('Error generating PDF: ' + error.message);
    }
}

// Add title page
function addTitlePage(doc, videos) {
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    
    // Add Python logo/icon
    doc.setFontSize(48);
    doc.setTextColor(...PDF_CONFIG.colors.secondary);
    doc.text('🐍', pageWidth / 2, 60, { align: 'center' });
    
    // Course title
    doc.setFontSize(28);
    doc.setTextColor(...PDF_CONFIG.colors.primary);
    doc.setFont('helvetica', 'bold');
    const title = 'SMIT Java-Script Course';
    doc.text(title, pageWidth / 2, 85, { align: 'center' });
    
    // Subtitle
    doc.setFontSize(16);
    doc.setTextColor(...PDF_CONFIG.colors.lightText);
    doc.setFont('helvetica', 'normal');
    doc.text('Complete Course Notes', pageWidth / 2, 100, { align: 'center' });
    
    // Course info
    const infoY = 130;
    doc.setFontSize(14);
    doc.setTextColor(...PDF_CONFIG.colors.primary);
    doc.setFont('helvetica', 'bold');
    doc.text('Course Overview', pageWidth / 2, infoY, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setTextColor(...PDF_CONFIG.colors.text);
    doc.setFont('helvetica', 'normal');
    doc.text(`Total Lectures: ${videos.length}`, pageWidth / 2, infoY + 15, { align: 'center' });
    
    // Calculate total duration
    const totalMinutes = videos.reduce((total, video) => {
        const [minutes, seconds] = video.duration.split(':').map(Number);
        return total + minutes + (seconds / 60);
    }, 0);
    doc.text(`Total Duration: ${Math.round(totalMinutes)} minutes`, pageWidth / 2, infoY + 25, { align: 'center' });
    
    // Generation date
    const date = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    doc.text(`Generated: ${date}`, pageWidth / 2, infoY + 35, { align: 'center' });
    
    // Footer
    doc.setFontSize(10);
    doc.setTextColor(...PDF_CONFIG.colors.lightText);
    doc.text('All video content available on YouTube', pageWidth / 2, pageHeight - 30, { align: 'center' });
}

// Add table of contents
function addTableOfContents(doc, videos) {
    const pageWidth = doc.internal.pageSize.getWidth();
    let currentY = 40;
    
    // TOC title
    doc.setFontSize(20);
    doc.setTextColor(...PDF_CONFIG.colors.primary);
    doc.setFont('helvetica', 'bold');
    doc.text('Table of Contents', 20, 30);
    
    // Line under title
    doc.setDrawColor(...PDF_CONFIG.colors.secondary);
    doc.setLineWidth(1);
    doc.line(20, 35, pageWidth - 20, 35);
    
    // TOC items
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    
    videos.forEach((video, index) => {
        if (currentY > 250) {
            doc.addPage();
            currentY = 40;
        }
        
        // Lecture number
        doc.setFillColor(...PDF_CONFIG.colors.primary);
        doc.roundedRect(20, currentY, 15, 7, 2, 2, 'F');
        doc.setTextColor(255, 255, 255);
        doc.text(video.number, 27.5, currentY + 4.5, { align: 'center' });
        
        // Lecture title
        doc.setTextColor(...PDF_CONFIG.colors.text);
        const title = doc.splitTextToSize(video.title, pageWidth - 100);
        doc.text(title, 45, currentY + 4.5);
        
        // Page number
        const pageNum = index + 3; // Title=1, TOC=2, first lecture=3
        doc.setTextColor(...PDF_CONFIG.colors.primary);
        doc.text(pageNum.toString(), pageWidth - 20, currentY + 4.5, { align: 'right' });
        
        // Dotted line
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.2);
        let x = 120;
        while (x < pageWidth - 40) {
            doc.line(x, currentY + 4, x + 1, currentY + 4);
            x += 2;
        }
        
        currentY += 10;
    });
}

// Add lecture content to PDF
async function addLectureToPDF(doc, video, lectureNum, isSingle = false) {
    const pageWidth = doc.internal.pageSize.getWidth();
    let currentY = 40;
    
    // Lecture header
    doc.setFillColor(...PDF_CONFIG.colors.primary);
    doc.roundedRect(20, currentY, 25, 10, 3, 3, 'F');
    
    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.text(video.number, 32.5, currentY + 6, { align: 'center' });
    
    // Lecture title
    doc.setFontSize(16);
    doc.setTextColor(...PDF_CONFIG.colors.text);
    const titleLines = doc.splitTextToSize(video.title, pageWidth - 50);
    titleLines.forEach((line, index) => {
        doc.text(line, 55, currentY + 6 + (index * 7));
    });
    
    currentY += 15 + (titleLines.length * 7);
    
    // Metadata
    doc.setFontSize(10);
    doc.setTextColor(...PDF_CONFIG.colors.lightText);
    doc.setFont('helvetica', 'normal');
    doc.text(`Duration: ${video.duration} | Added: ${video.dateAdded}`, 20, currentY);
    
    currentY += 15;
    
    // YouTube link
    doc.setFontSize(11);
    doc.setTextColor(...PDF_CONFIG.colors.red);
    doc.setFont('helvetica', 'bold');
    doc.text('YouTube Link:', 20, currentY);
    
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 255);
    doc.setFont('helvetica', 'normal');
    const urlLines = doc.splitTextToSize(video.youtubeLink, pageWidth - 40);
    urlLines.forEach((line, index) => {
        doc.text(line, 20, currentY + 5 + (index * 5));
    });
    
    currentY += 5 + (urlLines.length * 5) + 15;
    
    // Summary section
    doc.setFontSize(14);
    doc.setTextColor(...PDF_CONFIG.colors.primary);
    doc.setFont('helvetica', 'bold');
    doc.text('Summary', 20, currentY);
    
    doc.setDrawColor(...PDF_CONFIG.colors.secondary);
    doc.setLineWidth(0.5);
    doc.line(20, currentY + 2, 45, currentY + 2);
    
    currentY += 10;
    
    // Summary content
    doc.setFontSize(11);
    doc.setTextColor(...PDF_CONFIG.colors.text);
    doc.setFont('helvetica', 'normal');
    
    const summaryText = htmlToText(video.summary);
    const summaryLines = doc.splitTextToSize(summaryText, pageWidth - 40);
    
    for (const line of summaryLines) {
        if (currentY > 250) {
            doc.addPage();
            currentY = 40;
        }
        doc.text(line, 20, currentY);
        currentY += 6;
    }
    
    currentY += 10;
    
    // Q&A section if exists
    if (video.qa && video.qa.length > 0) {
        if (currentY > 230) {
            doc.addPage();
            currentY = 40;
        }
        
        doc.setFontSize(14);
        doc.setTextColor(...PDF_CONFIG.colors.primary);
        doc.setFont('helvetica', 'bold');
        doc.text('Questions & Answers', 20, currentY);
        
        doc.setDrawColor(...PDF_CONFIG.colors.secondary);
        doc.setLineWidth(0.5);
        doc.line(20, currentY + 2, 60, currentY + 2);
        
        currentY += 10;
        
        // Add each Q&A
        for (let i = 0; i < video.qa.length; i++) {
            if (currentY > 240) {
                doc.addPage();
                currentY = 40;
            }
            
            const qa = video.qa[i];
            
            // Question
            doc.setFontSize(11);
            doc.setTextColor(...PDF_CONFIG.colors.primary);
            doc.setFont('helvetica', 'bold');
            const questionText = `Q${i + 1}: ${qa.question}`;
            const questionLines = doc.splitTextToSize(questionText, pageWidth - 40);
            questionLines.forEach(line => {
                doc.text(line, 20, currentY);
                currentY += 6;
            });
            
            // Answer
            doc.setFontSize(11);
            doc.setTextColor(...PDF_CONFIG.colors.text);
            doc.setFont('helvetica', 'normal');
            const answerText = `A: ${qa.answer}`;
            const answerLines = doc.splitTextToSize(answerText, pageWidth - 50);
            answerLines.forEach(line => {
                doc.text(line, 30, currentY);
                currentY += 6;
            });
            
            currentY += 8;
        }
    }
    
    // Add link annotation for YouTube
    if (typeof doc.link === 'function') {
        const linkY = isSingle ? 30 : 35;
        doc.textWithLink('→ Watch on YouTube', pageWidth - 50, linkY, { url: video.youtubeLink });
    }
}

// Add page numbers
function addPageNumbers(doc) {
    const totalPages = doc.internal.getNumberOfPages();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        
        // Page number
        doc.setFontSize(9);
        doc.setTextColor(...PDF_CONFIG.colors.lightText);
        doc.text(`Page ${i} of ${totalPages}`, pageWidth / 2, 287, { align: 'center' });
        
        // Footer line
        doc.setDrawColor(220, 220, 220);
        doc.setLineWidth(0.2);
        doc.line(20, 283, pageWidth - 20, 283);
        
        // Course name
        doc.text('SMIT Java-Script Course', pageWidth - 20, 287, { align: 'right' });
    }
}

// Make functions available globally
window.generateAllLecturesPDF = generateAllLecturesPDF;
window.generateLecturePDF = generateLecturePDF;

console.log('PDF Generator functions loaded:', {
    generateAllLecturesPDF: typeof generateAllLecturesPDF,
    generateLecturePDF: typeof generateLecturePDF
});