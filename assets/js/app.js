// --- STATE MANAGEMENT ---
let itinerary = JSON.parse(localStorage.getItem('luxeWanderTrip')) || [];

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    renderHomeGallery();
    updateTripUI();
});

// --- PAGE ROUTING LOGIC ---
function navigate(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`.nav-links a[onclick="navigate('${pageId}')"]`);
    if(activeLink) activeLink.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateAndScroll(pageId, sectionId) {
    navigate(pageId);
    
    // Highlight the clicked link properly for anchor tags
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`.nav-links a[onclick="navigateAndScroll('${pageId}', '${sectionId}')"]`);
    if(activeLink) activeLink.classList.add('active');

    // Scroll to the specific section smoothly (with a slight delay to ensure rendering)
    const section = document.getElementById(sectionId);
    if (section) {
        setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth' });
        }, 50);
    }
}

// --- RENDER HOME GALLERY ---
function renderHomeGallery() {
    const gallery = document.getElementById('gallery-container');
    gallery.innerHTML = ''; // Prevent duplicates on re-render

    indiaData.forEach(state => {
        const safeId = state.id.replace(/'/g, "\\'");
        const cardHtml = `
            <div class="destination-card" onclick="openStateDetails('${safeId}')">
                <span class="card-tag">${state.tag}</span>
                <div class="img-wrapper">
                    <img src="${state.image}" class="card-image" alt="${state.name}">
                </div>
                <div class="card-content">
                    <h3 class="serif">${state.name}</h3>
                    <p>${state.description.substring(0, 80)}...</p>
                    <span class="explore-link">Explore Region <i class="fa-solid fa-arrow-right-long"></i></span>
                </div>
            </div>
        `;
        gallery.insertAdjacentHTML('beforeend', cardHtml);
    });
}

function openStyleDetails(styleId) {
    const meta = styleMeta[styleId];
    if(!meta) return;

    // Populate Hero
    document.getElementById('style-hero-img').src = meta.image;
    document.getElementById('style-title').innerText = meta.title;
    document.getElementById('style-desc').innerText = meta.desc;

    // Find matching states and render their attractions
    const styleAttractionsContainer = document.getElementById('style-attractions-container');
    styleAttractionsContainer.innerHTML = ''; 

    // Keyword mapping to filter specific places by their type
    const styleKeywords = {
        'wellness': ['wellness', 'nature', 'relax', 'leisure', 'scenic'],
        'heritage': ['heritage', 'architecture', 'ancient', 'culture', 'wonder', 'spiritual'],
        'wildlife': ['wildlife', 'safari']
    };
    const keywords = styleKeywords[styleId] || [styleId];

    const matchedStates = indiaData.filter(state => state.styles && state.styles.includes(styleId));

    if(matchedStates.length === 0) {
        styleAttractionsContainer.innerHTML = '<p style="text-align: center; color: var(--text-muted); font-size: 1.2rem;">More destinations for this style coming soon!</p>';
    } else {
        let hasPlaces = false;

        matchedStates.forEach(state => {
            // Filter the state's attractions to ONLY include those matching the style
            const matchedAttractions = state.attractions.filter(att => 
                keywords.some(keyword => att.type.toLowerCase().includes(keyword))
            );

            if (matchedAttractions.length > 0) {
                hasPlaces = true;
                // Create a section header for the State
                let stateSectionHtml = `
                    <div style="margin-bottom: 80px; padding: 0 5%; max-width: 1400px; margin-left: auto; margin-right: auto;">
                        <h2 class="serif" style="font-size: 2.5rem; color: var(--primary); margin-bottom: 30px; border-bottom: 2px solid #E8ECEB; padding-bottom: 15px; display: inline-block;">${state.name}</h2>
                        <div class="places-grid">
                `;

                // Inject ONLY the matching place cards
                matchedAttractions.forEach(att => {
                    const isAdded = itinerary.includes(att.name);
                    const btnText = isAdded ? '<i class="fa-solid fa-check"></i> Added to Itinerary' : '<i class="fa-solid fa-plus"></i> Add to Itinerary';
                    const btnClass = isAdded ? 'add-btn added' : 'add-btn';
                    const safeId = att.name.replace(/[^a-zA-Z0-9]/g, '');
                    const safeName = att.name.replace(/'/g, "\\'"); 

                    stateSectionHtml += `
                        <div class="place-card">
                            <img src="${att.image}" alt="${att.name}">
                            <div class="place-content">
                                <span>${att.type}</span>
                                <h3 class="serif">${att.name}</h3>
                                <p>${att.desc}</p>
                                <button class="${btnClass}" id="btn-style-${safeId}" onclick="toggleTripItem('${safeName}', this, event)">
                                    ${btnText}
                                </button>
                            </div>
                        </div>
                    `;
                });

                stateSectionHtml += `
                        </div>
                    </div>
                `;
                
                styleAttractionsContainer.insertAdjacentHTML('beforeend', stateSectionHtml);
            }
        });

        if (!hasPlaces) {
            styleAttractionsContainer.innerHTML = '<p style="text-align: center; color: var(--text-muted); font-size: 1.2rem;">Specific places for this style coming soon!</p>';
        }
    }

    navigate('style-details');
}


// --- DYNAMIC STATE DETAILS LOGIC ---
function openStateDetails(id) {
    const data = indiaData.find(d => d.id === id);
    if(!data) return;

    // Populate Hero
    document.getElementById('sd-hero-img').src = data.image;
    document.getElementById('sd-tag').innerText = data.tag;
    document.getElementById('sd-title').innerText = data.name;
    document.getElementById('sd-desc').innerText = data.description;

    // Populate Places Grid
    const placesGrid = document.getElementById('sd-places-grid');
    placesGrid.innerHTML = ''; 
    
    data.attractions.forEach(att => {
        const isAdded = itinerary.includes(att.name);
        const btnText = isAdded ? '<i class="fa-solid fa-check"></i> Added to Itinerary' : '<i class="fa-solid fa-plus"></i> Add to Itinerary';
        const btnClass = isAdded ? 'add-btn added' : 'add-btn';
        const safeId = att.name.replace(/[^a-zA-Z0-9]/g, '');
        const safeName = att.name.replace(/'/g, "\\'"); 

        const placeHtml = `
            <div class="place-card">
                <img src="${att.image}" alt="${att.name}">
                <div class="place-content">
                    <span>${att.type}</span>
                    <h3 class="serif">${att.name}</h3>
                    <p>${att.desc}</p>
                    <button class="${btnClass}" id="btn-sd-${safeId}" onclick="toggleTripItem('${safeName}', this, event)">
                        ${btnText}
                    </button>
                </div>
            </div>
        `;
        placesGrid.insertAdjacentHTML('beforeend', placeHtml);
    });

    navigate('state-details');
}

// --- DRAWER & ITINERARY LOGIC ---
const drawer = document.getElementById('itinerary-drawer');

function toggleDrawer() {
    drawer.classList.toggle('active');
}

window.toggleTripItem = function(name, btnElement, event) {
    event.stopPropagation(); 
    
    if (itinerary.includes(name)) {
        itinerary = itinerary.filter(i => i !== name);
        btnElement.classList.remove('added');
        btnElement.innerHTML = '<i class="fa-solid fa-plus"></i> Add to Itinerary';
    } else {
        itinerary.push(name);
        btnElement.classList.add('added');
        btnElement.innerHTML = '<i class="fa-solid fa-check"></i> Added to Itinerary';
    }
    updateTripUI();
}

window.removeTripItem = function(name) {
    itinerary = itinerary.filter(i => i !== name);
    updateTripUI();
    
    // Sync buttons on the standard State Details page
    const safeName = name.replace(/[^a-zA-Z0-9]/g, '');
    const btnState = document.getElementById(`btn-sd-${safeName}`);
    if(btnState) {
        btnState.classList.remove('added');
        btnState.innerHTML = '<i class="fa-solid fa-plus"></i> Add to Itinerary';
    }

    // Sync buttons on the Style Details page
    const btnStyle = document.getElementById(`btn-style-${safeName}`);
    if(btnStyle) {
        btnStyle.classList.remove('added');
        btnStyle.innerHTML = '<i class="fa-solid fa-plus"></i> Add to Itinerary';
    }
}

function updateTripUI() {
    localStorage.setItem('luxeWanderTrip', JSON.stringify(itinerary));
    document.getElementById('trip-counter').innerText = itinerary.length;

    const drawerItems = document.getElementById('drawer-items');
    const emptyState = document.getElementById('empty-state');
    
    document.querySelectorAll('.trip-item').forEach(el => el.remove());
    
    if (itinerary.length === 0) {
        emptyState.style.display = 'block';
    } else {
        emptyState.style.display = 'none';
        itinerary.forEach(item => {
            const safeItemForHandler = item.replace(/'/g, "\\'");
            const ticket = document.createElement('div');
            ticket.className = 'trip-item';
            ticket.innerHTML = `
                <span>${item}</span>
                <button class="remove-btn" onclick="removeTripItem('${safeItemForHandler}')">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            `;
            drawerItems.appendChild(ticket);
        });
    }
}
