// 全世界の名産品データ
const worldFoodData = [
    // アジア
    // 中国
    { name: "北京ダック", country: "中国", continent: "アジア", category: "肉類", season: "通年", lat: 39.9042, lng: 116.4074, description: "北京の名物料理。皮がパリパリで、肉は柔らかく仕上げられます。" },
    { name: "小籠包", country: "中国", continent: "アジア", category: "その他", season: "通年", lat: 39.9042, lng: 116.4074, description: "上海の名物点心。薄い皮に肉汁がたっぷり詰まった小籠包です。" },
    { name: "麻婆豆腐", country: "中国", continent: "アジア", category: "その他", season: "通年", lat: 39.9042, lng: 116.4074, description: "四川料理の代表格。辛くて香り高い麻婆豆腐です。" },
    
    // 韓国
    { name: "キムチ", country: "韓国", continent: "アジア", category: "野菜", season: "通年", lat: 37.5665, lng: 126.9780, description: "韓国の代表的な漬物。白菜を唐辛子で漬け込んだ発酵食品です。" },
    { name: "ビビンバ", country: "韓国", continent: "アジア", category: "その他", season: "通年", lat: 37.5665, lng: 126.9780, description: "韓国の定番料理。ご飯に野菜と肉をのせて混ぜて食べます。" },
    { name: "韓国海苔", country: "韓国", continent: "アジア", category: "海産物", season: "通年", lat: 37.5665, lng: 126.9780, description: "韓国産の高品質な海苔。香り高く、味が濃厚です。" },
    
    // タイ
    { name: "トムヤムクン", country: "タイ", continent: "アジア", category: "海産物", season: "通年", lat: 13.7563, lng: 100.5018, description: "タイの代表的なスープ。酸味と辛味が特徴です。" },
    { name: "パッタイ", country: "タイ", continent: "アジア", category: "その他", season: "通年", lat: 13.7563, lng: 100.5018, description: "タイの国民的麺料理。甘辛い味付けが特徴です。" },
    { name: "マンゴスチン", country: "タイ", continent: "アジア", category: "果物", season: "夏", lat: 13.7563, lng: 100.5018, description: "タイの王様フルーツ。甘くて香り高い高級フルーツです。" },
    
    // インド
    { name: "カレー", country: "インド", continent: "アジア", category: "その他", season: "通年", lat: 28.6139, lng: 77.2090, description: "インドの代表的な料理。スパイスが効いた本格カレーです。" },
    { name: "ナン", country: "インド", continent: "アジア", category: "その他", season: "通年", lat: 28.6139, lng: 77.2090, description: "インドの伝統的なパン。タンドール窯で焼き上げます。" },
    { name: "マンゴー", country: "インド", continent: "アジア", category: "果物", season: "夏", lat: 28.6139, lng: 77.2090, description: "インドは世界最大のマンゴー生産国。甘くて香り高いです。" },
    
    // ベトナム
    { name: "フォー", country: "ベトナム", continent: "アジア", category: "その他", season: "通年", lat: 21.0285, lng: 105.8542, description: "ベトナムの国民的麺料理。さっぱりとしたスープが特徴です。" },
    { name: "生春巻き", country: "ベトナム", continent: "アジア", category: "その他", season: "通年", lat: 21.0285, lng: 105.8542, description: "ベトナムの代表的な巻物。野菜とエビをライスペーパーで巻きます。" },
    { name: "コーヒー", country: "ベトナム", continent: "アジア", category: "飲み物", season: "通年", lat: 21.0285, lng: 105.8542, description: "ベトナムコーヒー。コンデンスミルクと合わせて飲むのが定番です。" },
    
    // ヨーロッパ
    // フランス
    { name: "フォアグラ", country: "フランス", continent: "ヨーロッパ", category: "肉類", season: "通年", lat: 48.8566, lng: 2.3522, description: "フランスの高級食材。ガチョウの肝臓を肥育させた珍味です。" },
    { name: "チーズ", country: "フランス", continent: "ヨーロッパ", category: "その他", season: "通年", lat: 48.8566, lng: 2.3522, description: "フランスは世界有数のチーズ王国。400種類以上のチーズがあります。" },
    { name: "ワイン", country: "フランス", continent: "ヨーロッパ", category: "飲み物", season: "通年", lat: 48.8566, lng: 2.3522, description: "フランスワインは世界最高峰。ボルドー、ブルゴーニュなど有名産地があります。" },
    
    // イタリア
    { name: "パスタ", country: "イタリア", continent: "ヨーロッパ", category: "その他", season: "通年", lat: 41.9028, lng: 12.4964, description: "イタリアの代表的な料理。様々な種類のパスタがあります。" },
    { name: "ピザ", country: "イタリア", continent: "ヨーロッパ", category: "その他", season: "通年", lat: 41.9028, lng: 12.4964, description: "イタリア発祥の世界的料理。ナポリピザが有名です。" },
    { name: "パルメザンチーズ", country: "イタリア", continent: "ヨーロッパ", category: "その他", season: "通年", lat: 41.9028, lng: 12.4964, description: "イタリアの代表的なチーズ。パスタやリゾットに欠かせません。" },
    
    // スペイン
    { name: "パエリア", country: "スペイン", continent: "ヨーロッパ", category: "その他", season: "通年", lat: 40.4168, lng: -3.7038, description: "スペインの代表的な米料理。サフランで色づけした豪華な料理です。" },
    { name: "ハモン・イベリコ", country: "スペイン", continent: "ヨーロッパ", category: "肉類", season: "通年", lat: 40.4168, lng: -3.7038, description: "スペインの最高級生ハム。ドングリを食べて育った豚のハムです。" },
    { name: "オリーブオイル", country: "スペイン", continent: "ヨーロッパ", category: "その他", season: "通年", lat: 40.4168, lng: -3.7038, description: "スペインは世界最大のオリーブオイル生産国。高品質なエクストラバージンオイルが有名です。" },
    
    // ドイツ
    { name: "ソーセージ", country: "ドイツ", continent: "ヨーロッパ", category: "肉類", season: "通年", lat: 52.5200, lng: 13.4050, description: "ドイツの代表的な肉加工品。1500種類以上のソーセージがあります。" },
    { name: "ビール", country: "ドイツ", continent: "ヨーロッパ", category: "飲み物", season: "通年", lat: 52.5200, lng: 13.4050, description: "ドイツビールは世界最高峰。純粋令に基づく本格的なビールです。" },
    { name: "ザワークラウト", country: "ドイツ", continent: "ヨーロッパ", category: "野菜", season: "通年", lat: 52.5200, lng: 13.4050, description: "ドイツの伝統的な漬物。キャベツを乳酸発酵させた酸味のある漬物です。" },
    
    // イギリス
    { name: "フィッシュ&チップス", country: "イギリス", continent: "ヨーロッパ", category: "海産物", season: "通年", lat: 51.5074, lng: -0.1278, description: "イギリスの国民的料理。白身魚のフライとポテトフライの組み合わせです。" },
    { name: "紅茶", country: "イギリス", continent: "ヨーロッパ", category: "飲み物", season: "通年", lat: 51.5074, lng: -0.1278, description: "イギリスの代表的な飲み物。アフタヌーンティーの文化が有名です。" },
    
    // 北アメリカ
    // アメリカ
    { name: "ハンバーガー", country: "アメリカ", continent: "北アメリカ", category: "肉類", season: "通年", lat: 40.7128, lng: -74.0060, description: "アメリカの代表的な料理。世界に広まったファストフードの王様です。" },
    { name: "アップルパイ", country: "アメリカ", continent: "北アメリカ", category: "お菓子", season: "通年", lat: 40.7128, lng: -74.0060, description: "アメリカの伝統的なデザート。シナモンとリンゴの甘い香りが特徴です。" },
    { name: "コーンビーフ", country: "アメリカ", continent: "北アメリカ", category: "肉類", season: "通年", lat: 40.7128, lng: -74.0060, description: "アメリカの代表的な缶詰食品。サンドイッチやサラダに使われます。" },
    
    // カナダ
    { name: "メープルシロップ", country: "カナダ", continent: "北アメリカ", category: "その他", season: "春", lat: 45.5017, lng: -73.5673, description: "カナダの代表的な天然甘味料。サトウカエデの樹液から作られます。" },
    { name: "サーモン", country: "カナダ", continent: "北アメリカ", category: "海産物", season: "通年", lat: 45.5017, lng: -73.5673, description: "カナダの代表的な海産物。大西洋サーモンが特に有名です。" },
    
    // メキシコ
    { name: "タコス", country: "メキシコ", continent: "北アメリカ", category: "その他", season: "通年", lat: 19.4326, lng: -99.1332, description: "メキシコの代表的な料理。トルティーヤに具材を包んで食べます。" },
    { name: "アボカド", country: "メキシコ", continent: "北アメリカ", category: "果物", season: "通年", lat: 19.4326, lng: -99.1332, description: "メキシコ原産の果物。グアカモーレやサラダに使われます。" },
    { name: "チリ", country: "メキシコ", continent: "北アメリカ", category: "野菜", season: "通年", lat: 19.4326, lng: -99.1332, description: "メキシコ料理に欠かせない唐辛子。様々な種類があります。" },
    
    // 南アメリカ
    // ブラジル
    { name: "アサイー", country: "ブラジル", continent: "南アメリカ", category: "果物", season: "通年", lat: -23.5505, lng: -46.6333, description: "ブラジルのスーパーフルーツ。抗酸化作用が高く、健康食品として人気です。" },
    { name: "フェイジョアーダ", country: "ブラジル", continent: "南アメリカ", category: "その他", season: "通年", lat: -23.5505, lng: -46.6333, description: "ブラジルの国民的料理。黒豆と豚肉を煮込んだ豪華な料理です。" },
    { name: "カシャッサ", country: "ブラジル", continent: "南アメリカ", category: "飲み物", season: "通年", lat: -23.5505, lng: -46.6333, description: "ブラジルの代表的な蒸留酒。サトウキビから作られる強いお酒です。" },
    
    // アルゼンチン
    { name: "ステーキ", country: "アルゼンチン", continent: "南アメリカ", category: "肉類", season: "通年", lat: -34.6118, lng: -58.3960, description: "アルゼンチンの代表的な料理。世界最高級の牛肉で作られるステーキです。" },
    { name: "マテ茶", country: "アルゼンチン", continent: "南アメリカ", category: "飲み物", season: "通年", lat: -34.6118, lng: -58.3960, description: "アルゼンチンの伝統的なお茶。金属製のストローで飲む独特の文化があります。" },
    
    // ペルー
    { name: "セビチェ", country: "ペルー", continent: "南アメリカ", category: "海産物", season: "通年", lat: -12.0464, lng: -77.0428, description: "ペルーの代表的な料理。生の魚介をレモンでマリネした料理です。" },
    { name: "キヌア", country: "ペルー", continent: "南アメリカ", category: "米・穀物", season: "通年", lat: -12.0464, lng: -77.0428, description: "ペルー原産のスーパーフード。栄養価が高く、健康食品として注目されています。" },
    
    // アフリカ
    // エチオピア
    { name: "コーヒー", country: "エチオピア", continent: "アフリカ", category: "飲み物", season: "通年", lat: 9.1450, lng: 38.7667, description: "エチオピアはコーヒーの発祥地。世界最高品質のコーヒーが生産されています。" },
    { name: "インジェラ", country: "エチオピア", continent: "アフリカ", category: "その他", season: "通年", lat: 9.1450, lng: 38.7667, description: "エチオピアの伝統的なパン。テフという穀物から作られる酸味のあるパンです。" },
    
    // モロッコ
    { name: "タジン", country: "モロッコ", continent: "アフリカ", category: "その他", season: "通年", lat: 31.6295, lng: -7.9811, description: "モロッコの代表的な料理。土鍋で肉と野菜を煮込んだ料理です。" },
    { name: "ミントティー", country: "モロッコ", continent: "アフリカ", category: "飲み物", season: "通年", lat: 31.6295, lng: -7.9811, description: "モロッコの伝統的なお茶。ミントと砂糖をたっぷり入れた甘いお茶です。" },
    
    // 南アフリカ
    { name: "ボボティ", country: "南アフリカ", continent: "アフリカ", category: "肉類", season: "通年", lat: -33.9249, lng: 18.4241, description: "南アフリカの代表的な料理。スパイスで味付けしたミートローフです。" },
    { name: "ルイボスティー", country: "南アフリカ", continent: "アフリカ", category: "飲み物", season: "通年", lat: -33.9249, lng: 18.4241, description: "南アフリカ原産のハーブティー。カフェインフリーで健康に良いお茶です。" },
    
    // オセアニア
    // オーストラリア
    { name: "ベジマイト", country: "オーストラリア", continent: "オセアニア", category: "その他", season: "通年", lat: -33.8688, lng: 151.2093, description: "オーストラリアの国民的スプレッド。ビールの搾りかすから作られる独特の味です。" },
    { name: "ラミントン", country: "オーストラリア", continent: "オセアニア", category: "お菓子", season: "通年", lat: -33.8688, lng: 151.2093, description: "オーストラリアの代表的なケーキ。ココナッツをまぶした四角いケーキです。" },
    { name: "マカダミアナッツ", country: "オーストラリア", continent: "オセアニア", category: "その他", season: "通年", lat: -33.8688, lng: 151.2093, description: "オーストラリア原産のナッツ。クリーミーで甘みがあり、高級ナッツとして人気です。" },
    
    // ニュージーランド
    { name: "マヌカハニー", country: "ニュージーランド", continent: "オセアニア", category: "その他", season: "通年", lat: -41.2865, lng: 174.7762, description: "ニュージーランドの高級はちみつ。抗菌作用が高く、健康食品として注目されています。" },
    { name: "ラム肉", country: "ニュージーランド", continent: "オセアニア", category: "肉類", season: "通年", lat: -41.2865, lng: 174.7762, description: "ニュージーランドの代表的な肉。牧草で育った羊の肉は柔らかく、うま味が豊富です。" },
    
    // 中東
    // トルコ
    { name: "ケバブ", country: "トルコ", continent: "中東", category: "肉類", season: "通年", lat: 41.0082, lng: 28.9784, description: "トルコの代表的な料理。串に刺した肉を焼いた料理です。" },
    { name: "バクラバ", country: "トルコ", continent: "中東", category: "お菓子", season: "通年", lat: 41.0082, lng: 28.9784, description: "トルコの代表的なデザート。フィロ生地とナッツ、シロップを使った甘いお菓子です。" },
    { name: "トルココーヒー", country: "トルコ", continent: "中東", category: "飲み物", season: "通年", lat: 41.0082, lng: 28.9784, description: "トルコの伝統的なコーヒー。細かく挽いたコーヒーを煮出して飲みます。" },
    
    // イラン
    { name: "サフラン", country: "イラン", continent: "中東", category: "その他", season: "通年", lat: 35.6892, lng: 51.3890, description: "イランは世界最大のサフラン生産国。高級スパイスとして知られています。" },
    { name: "ピスタチオ", country: "イラン", continent: "中東", category: "その他", season: "通年", lat: 35.6892, lng: 51.3890, description: "イランの代表的なナッツ。香り高く、高級ナッツとして人気です。" },
    
    // イスラエル
    { name: "フムス", country: "イスラエル", continent: "中東", category: "その他", season: "通年", lat: 31.7683, lng: 35.2137, description: "イスラエルの代表的な料理。ひよこ豆のペーストにオリーブオイルをかけた料理です。" },
    { name: "ザアタル", country: "イスラエル", continent: "中東", category: "その他", season: "通年", lat: 31.7683, lng: 35.2137, description: "中東の代表的なスパイスミックス。ゴマ、タイム、オレガノなどを混ぜ合わせた香り高いスパイスです。" }
];

// 大陸別の中心座標
const continentCenters = {
    "アジア": { lat: 34.0479, lng: 100.6197 },
    "ヨーロッパ": { lat: 54.5260, lng: 15.2551 },
    "北アメリカ": { lat: 54.5260, lng: -105.2551 },
    "南アメリカ": { lat: -15.7801, lng: -47.9292 },
    "アフリカ": { lat: 8.7832, lng: 34.5085 },
    "オセアニア": { lat: -25.2744, lng: 133.7751 },
    "中東": { lat: 29.3117, lng: 47.4818 }
};

// 国別の中心座標（主要国のみ）
const countryCenters = {
    "中国": { lat: 35.8617, lng: 104.1954 },
    "韓国": { lat: 35.9078, lng: 127.7669 },
    "タイ": { lat: 15.8700, lng: 100.9925 },
    "インド": { lat: 20.5937, lng: 78.9629 },
    "ベトナム": { lat: 14.0583, lng: 108.2772 },
    "フランス": { lat: 46.2276, lng: 2.2137 },
    "イタリア": { lat: 41.8719, lng: 12.5674 },
    "スペイン": { lat: 40.4637, lng: -3.7492 },
    "ドイツ": { lat: 51.1657, lng: 10.4515 },
    "イギリス": { lat: 55.3781, lng: -3.4360 },
    "アメリカ": { lat: 37.0902, lng: -95.7129 },
    "カナダ": { lat: 56.1304, lng: -106.3468 },
    "メキシコ": { lat: 23.6345, lng: -102.5528 },
    "ブラジル": { lat: -14.2350, lng: -51.9253 },
    "アルゼンチン": { lat: -38.4161, lng: -63.6167 },
    "ペルー": { lat: -9.1900, lng: -75.0152 },
    "エチオピア": { lat: 9.1450, lng: 40.4897 },
    "モロッコ": { lat: 31.6295, lng: -7.9811 },
    "南アフリカ": { lat: -30.5595, lng: 22.9375 },
    "オーストラリア": { lat: -25.2744, lng: 133.7751 },
    "ニュージーランド": { lat: -40.9006, lng: 174.8860 },
    "トルコ": { lat: 38.9637, lng: 35.2433 },
    "イラン": { lat: 32.4279, lng: 53.6880 },
    "イスラエル": { lat: 31.0461, lng: 34.8516 }
};
