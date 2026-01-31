// Main Application Script

// DOM Elements
const videoGrid = document.getElementById('videoGrid');
const searchInput = document.getElementById('searchInput');
const mobileSearch = document.getElementById('mobileSearch');
const clearSearch = document.getElementById('clearSearch');
const sortSelect = document.getElementById('sortSelect');
const tocList = document.getElementById('tocList');
const tocContainer = document.getElementById('tocContainer');
const mobileTocBtn = document.getElementById('mobileTocBtn');
const tocClose = document.getElementById('tocClose');
const noResults = document.getElementById('noResults');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const downloadAllPDF = document.getElementById('downloadAllPDF');

// State
let currentVideos = [];
let currentSort = 'newest';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script.js loaded');
    initializeApp();
});

function initializeApp() {
    // Load and display videos
    loadVideos();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize mobile menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Initialize TOC toggle
    if (mobileTocBtn) {
        mobileTocBtn.addEventListener('click', toggleTOC);
    }
    
    if (tocClose) {
        tocClose.addEventListener('click', toggleTOC);
    }
    
    // Initialize PDF download
    setupPDFDownload();
}

function loadVideos() {
    console.log('Loading videos...');
    
    // Check if videoData is available
    if (typeof videoData === 'undefined') {
        console.error('videoData is not defined!');
        return;
    }
    
    // Sort videos based on current sort setting
    sortVideos();
    
    // Display videos
    displayVideos(currentVideos);
    
    // Update table of contents
    updateTOC(currentVideos);
}

function sortVideos() {
    // Create a copy of the video data
    currentVideos = [...videoData];
    
    console.log('Sorting videos with', currentSort, 'method');
    
    switch (currentSort) {
        case 'newest':
            // Sort by ID descending (higher ID = newer)
            currentVideos.sort((a, b) => b.id - a.id);
            break;
        case 'oldest':
            // Sort by ID ascending (lower ID = older)
            currentVideos.sort((a, b) => a.id - b.id);
            break;
        case 'lecture':
            // Sort by lecture number (Lecture 1, Lecture 2, etc.)
            currentVideos.sort((a, b) => {
                const numA = parseInt(a.number.split(' ')[1]);
                const numB = parseInt(b.number.split(' ')[1]);
                return numA - numB;
            });
            break;
    }
    
    console.log('Sorted videos:', currentVideos.map(v => v.number));
}

function displayVideos(videos) {
    if (!videoGrid) {
        console.error('videoGrid element not found!');
        return;
    }
    
    videoGrid.innerHTML = '';
    
    if (videos.length === 0) {
        if (noResults) {
            noResults.style.display = 'block';
        }
        return;
    }
    
    if (noResults) {
        noResults.style.display = 'none';
    }
    
    videos.forEach(video => {
        const videoCard = createVideoCard(video);
        videoGrid.appendChild(videoCard);
    });
}

function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.id = `video-${video.id}`;
    
    card.innerHTML = `
        <div class="thumbnail-container">
            <a href="${video.youtubeLink}" target="_blank" class="thumbnail-link">
                <img src="${video.thumbnail}" alt="${video.title}" class="thumbnail" loading="lazy">
                <div class="play-overlay">
                    <i class="fas fa-play"></i>
                </div>
            </a>
        </div>
        
        <div class="video-info">
            <h3 class="video-title">${video.title}</h3>
            <div class="video-meta">
                <span class="video-number">${video.number}</span>
                <span class="video-duration">
                    <i class="far fa-clock"></i> ${video.duration}
                </span>
                ${video.dateAdded ? `
                    <span class="video-date">
                        <i class="far fa-calendar"></i> ${video.dateAdded}
                    </span>
                ` : ''}
            </div>
            
            <div class="video-actions">
                <a href="${video.youtubeLink}" target="_blank" class="btn-watch">
                    <i class="fab fa-youtube"></i> Watch on YouTube
                </a>
                <a href="video-detail.html?id=${video.id}" class="btn-summary">
                    <i class="fas fa-file-alt"></i> View Summary
                </a>
            </div>
        </div>
    `;
    
    return card;
}

function updateTOC(videos) {
    if (!tocList) {
        console.error('tocList element not found!');
        return;
    }
    
    tocList.innerHTML = '';
    
    videos.forEach(video => {
        const tocItem = document.createElement('a');
        tocItem.href = `video-detail.html?id=${video.id}`;
        tocItem.className = 'toc-item';
        
        tocItem.innerHTML = `
            <span class="toc-number">${video.number}</span>
            <span class="toc-title">${video.title}</span>
            <span class="toc-duration">${video.duration}</span>
        `;
        
        tocList.appendChild(tocItem);
    });
}

function setupEventListeners() {
    console.log('Setting up event listeners');
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    if (mobileSearch) {
        mobileSearch.addEventListener('input', handleMobileSearch);
    }
    
    if (clearSearch) {
        clearSearch.addEventListener('click', clearSearchInput);
    }
    
    // Sort functionality
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSortChange);
    }
    
    // Close TOC when clicking outside
    document.addEventListener('click', function(event) {
        if (tocContainer && 
            tocContainer.classList.contains('active') &&
            !tocContainer.contains(event.target) &&
            event.target !== mobileTocBtn) {
            tocContainer.classList.remove('active');
        }
    });
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    if (searchInput.value.length > 0) {
        clearSearch.classList.add('visible');
    } else {
        clearSearch.classList.remove('visible');
    }
    
    filterVideos(searchTerm);
}

function handleMobileSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    filterVideos(searchTerm);
}

function filterVideos(searchTerm) {
    if (!searchTerm) {
        displayVideos(currentVideos);
        updateTOC(currentVideos);
        return;
    }
    
    const filteredVideos = currentVideos.filter(video => {
        return video.title.toLowerCase().includes(searchTerm) ||
               video.summary.toLowerCase().includes(searchTerm) ||
               (video.qa && video.qa.some(qa => 
                   qa.question.toLowerCase().includes(searchTerm) ||
                   qa.answer.toLowerCase().includes(searchTerm)
               ));
    });
    
    displayVideos(filteredVideos);
    updateTOC(filteredVideos);
}

function clearSearchInput() {
    if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
        clearSearch.classList.remove('visible');
        filterVideos('');
    }
    
    if (mobileSearch) {
        mobileSearch.value = '';
        filterVideos('');
    }
}

function handleSortChange(e) {
    currentSort = e.target.value;
    console.log('Sort changed to:', currentSort);
    loadVideos();
}

function toggleTOC() {
    if (tocContainer) {
        tocContainer.classList.toggle('active');
    }
}

function toggleMobileMenu() {
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

// PDF Download functionality
function setupPDFDownload() {
    console.log('Setting up PDF download');
    
    // Download all lectures PDF
    if (downloadAllPDF) {
        downloadAllPDF.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Download All PDF button clicked');
            
            // Check if videoData is available
            if (typeof videoData === 'undefined' || !Array.isArray(videoData)) {
                alert('Course data not loaded. Please refresh the page.');
                return;
            }
            
            if (typeof generateAllLecturesPDF !== 'function') {
                alert('PDF generator not loaded. Please refresh the page.');
                return;
            }
            
            // Show confirmation
            const confirmed = confirm('This will generate a PDF with all lectures. It may take a few moments. Continue?');
            if (confirmed) {
                console.log('Starting PDF generation...');
                generateAllLecturesPDF().catch(error => {
                    console.error('PDF generation failed:', error);
                    alert('Failed to generate PDF. Please check console for details.');
                });
            }
        });
    }
}

// Make functions available globally for video-detail page
window.loadVideos = loadVideos;
window.sortVideos = sortVideos;
window.displayVideos = displayVideos;