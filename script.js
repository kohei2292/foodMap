// グローバル変数
let map;
let markers = [];
let filteredData = [...foodData];
let currentMarkers = [];

// カテゴリ別のアイコン色
const categoryColors = {
    '果物': '#ff6b6b',
    '野菜': '#4ecdc4',
    '海産物': '#45b7d1',
    '肉類': '#f9ca24',
    '米・穀物': '#6c5ce7',
    'お菓子': '#fd79a8',
    '飲み物': '#00b894',
    'その他': '#636e72'
};

// 季節別のアイコン
const seasonIcons = {
    '春': '🌸',
    '夏': '☀️',
    '秋': '🍂',
    '冬': '❄️',
    '通年': '🌟'
};

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    initializeMap();
    setupEventListeners();
    displayProducts(filteredData);
    updateResultCount();
});

// 地図の初期化
function initializeMap() {
    // 地図の中心を日本に設定
    map = L.map('map').setView([36.2048, 138.2529], 6);
    
    // タイルレイヤーを追加
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // 初期マーカーを追加
    addMarkersToMap(filteredData);
}

// マーカーを地図に追加
function addMarkersToMap(data) {
    // 既存のマーカーをクリア
    clearMarkers();
    
    data.forEach(product => {
        const marker = L.marker([product.lat, product.lng], {
            icon: createCustomIcon(product.category, product.season)
        }).addTo(map);
        
        // ポップアップの内容を作成
        const popupContent = createPopupContent(product);
        marker.bindPopup(popupContent);
        
        // クリックイベントを追加
        marker.on('click', function() {
            showProductDetail(product);
        });
        
        currentMarkers.push(marker);
    });
}

// カスタムアイコンを作成
function createCustomIcon(category, season) {
    const color = categoryColors[category] || '#636e72';
    const seasonIcon = seasonIcons[season] || '🌟';
    
    return L.divIcon({
        className: 'custom-marker',
        html: `
            <div style="
                background-color: ${color};
                width: 30px;
                height: 30px;
                border-radius: 50%;
                border: 3px solid white;
                box-shadow: 0 2px 10px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                cursor: pointer;
                transition: transform 0.2s ease;
            " onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">
                ${seasonIcon}
            </div>
        `,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
}

// ポップアップの内容を作成
function createPopupContent(product) {
    return `
        <div style="min-width: 200px;">
            <h3 style="margin: 0 0 8px 0; color: #2c3e50; font-size: 16px;">${product.name}</h3>
            <p style="margin: 0 0 8px 0; color: #7f8c8d; font-size: 14px;">${product.prefecture}</p>
            <div style="display: flex; gap: 5px; margin-bottom: 8px;">
                <span style="background: ${categoryColors[product.category]}; color: white; padding: 2px 8px; border-radius: 10px; font-size: 12px;">${product.category}</span>
                <span style="background: #e8f5e8; color: #27ae60; padding: 2px 8px; border-radius: 10px; font-size: 12px;">${product.season}</span>
            </div>
            <p style="margin: 0; color: #555; font-size: 13px; line-height: 1.4;">${product.description}</p>
        </div>
    `;
}

// 既存のマーカーをクリア
function clearMarkers() {
    currentMarkers.forEach(marker => {
        map.removeLayer(marker);
    });
    currentMarkers = [];
}

// イベントリスナーの設定
function setupEventListeners() {
    // 検索ボックス
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearch');
    
    searchInput.addEventListener('input', handleSearch);
    clearSearchBtn.addEventListener('click', clearSearch);
    
    // フィルター
    const categoryFilter = document.getElementById('categoryFilter');
    const seasonFilter = document.getElementById('seasonFilter');
    
    categoryFilter.addEventListener('change', handleFilter);
    seasonFilter.addEventListener('change', handleFilter);
    
    // モーダル
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// 検索処理
function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const seasonFilter = document.getElementById('seasonFilter').value;
    
    filteredData = foodData.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                            product.prefecture.toLowerCase().includes(searchTerm) ||
                            product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || product.category === categoryFilter;
        const matchesSeason = !seasonFilter || product.season === seasonFilter;
        
        return matchesSearch && matchesCategory && matchesSeason;
    });
    
    displayProducts(filteredData);
    addMarkersToMap(filteredData);
    updateResultCount();
}

// フィルター処理
function handleFilter() {
    handleSearch();
}

// 検索をクリア
function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('seasonFilter').value = '';
    handleSearch();
}

// 商品一覧を表示
function displayProducts(products) {
    const productList = document.getElementById('productList');
    
    if (products.length === 0) {
        productList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>該当する名産品が見つかりません</h3>
                <p>検索条件を変更してお試しください</p>
            </div>
        `;
        return;
    }
    
    productList.innerHTML = products.map(product => `
        <div class="product-item" onclick="showProductDetail('${product.name}')">
            <div class="product-name">${product.name}</div>
            <div class="product-prefecture">${product.prefecture}</div>
            <div>
                <span class="product-category">${product.category}</span>
                <span class="product-season">${product.season}</span>
            </div>
        </div>
    `).join('');
}

// 商品詳細を表示
function showProductDetail(productName) {
    const product = foodData.find(p => p.name === productName);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <div class="modal-product-name">${product.name}</div>
        <div class="modal-product-prefecture">${product.prefecture}</div>
        <div class="modal-product-description">${product.description}</div>
        <div class="modal-product-details">
            <div class="detail-item">
                <div class="detail-label">カテゴリ</div>
                <div class="detail-value">${product.category}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">季節</div>
                <div class="detail-value">${product.season}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">都道府県</div>
                <div class="detail-value">${product.prefecture}</div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // 地図の中心をその商品の位置に移動
    map.setView([product.lat, product.lng], 8);
}

// モーダルを閉じる
function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// 結果数を更新
function updateResultCount() {
    const resultCount = document.getElementById('resultCount');
    resultCount.textContent = `${filteredData.length}件`;
}

// キーボードショートカット
document.addEventListener('keydown', function(e) {
    // Escapeキーでモーダルを閉じる
    if (e.key === 'Escape') {
        closeModal();
    }
    
    // Ctrl+Fで検索ボックスにフォーカス
    if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
});

// ウィンドウリサイズ時の処理
window.addEventListener('resize', function() {
    setTimeout(() => {
        if (map) {
            map.invalidateSize();
        }
    }, 100);
});

// 地図のズームレベルに応じてマーカーの表示を調整
map.on('zoomend', function() {
    const zoom = map.getZoom();
    // ズームレベルが低い場合は一部のマーカーのみ表示
    if (zoom < 7) {
        // 都道府県ごとに代表的な商品のみ表示
        const representativeProducts = getRepresentativeProducts();
        addMarkersToMap(representativeProducts);
    } else {
        // すべてのマーカーを表示
        addMarkersToMap(filteredData);
    }
});

// 都道府県ごとの代表的な商品を取得
function getRepresentativeProducts() {
    const prefectureProducts = {};
    
    filteredData.forEach(product => {
        if (!prefectureProducts[product.prefecture]) {
            prefectureProducts[product.prefecture] = product;
        }
    });
    
    return Object.values(prefectureProducts);
}
